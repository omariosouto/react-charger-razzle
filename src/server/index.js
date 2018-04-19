// Coisas do Node
import express from 'express';
import cookieParser from 'cookie-parser'

// Lib responsável por AJAX
import 'universal-fetch';

// Helpers para o SSR
import { doRedirect,
        extractInitialData,
        extractActiveRouteInfoFromRoutes,
        getCurrentComponent } from './ssr-helpers.js'

// Coisas do React
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { renderToStaticMarkup, renderToString } from 'react-dom/server';

// Coisas da Aplicação
import Html from '../components/Html'
import Routes from '../routes';

// Coisas do Redux
import { Provider } from 'react-redux'
import configuraStore from '../store'

// Coisas do React Loadable (Componentes Assincronos)
import { Capture } from 'react-loadable';
import { getBundles } from 'react-loadable/webpack';
import stats from '../../build/react-loadable.json';

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const server = express();

// Cookies Support
server.use(cookieParser())

server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', (request, resposta) => {
    let status = 200

    // 1 - Extrai a rota ativa
    const activeRouteInfo = extractActiveRouteInfoFromRoutes(request.url, Routes)
    request.params = activeRouteInfo.params // Repassa os parâmetros do React Router para o `request` do Express

    // 2 - Precisamos garantir que a rota 404 existe na aplicação.
    if(!activeRouteInfo.route) { 
      resposta.send("Você deve criar uma rota que represente a 404 com o path='*'.")
      return false;
    }
    
    // 3 - Define um redirect caso necessário
    if(activeRouteInfo.route.props.render) { 
      doRedirect(activeRouteInfo, resposta.redirect)
      return false;
    }

    // 4 - Extrai o componente da rota atual (Sincrono ou Assincrono)
    getCurrentComponent(activeRouteInfo.route.props)
      .then((component) => extractInitialData(component, request))
      .then(({component, initialData}) => {        
        // Setup da aplicação no server (obrigatório)
        let markup = (
          <StaticRouter context={ initialData } location={request.url}>
            <Routes />
          </StaticRouter>
        )
        // ./

        // Configuração do Redux (opcional)
        const storeInicial = configuraStore() // Pega o esqueleto da store do redux
        const store = configuraStore({
          ...storeInicial.getState(),
          ...initialData  
        }) // Cria a store, somente alterando o dado passado, mas mantendo o esqueleto
        
        // Essa alteração deve ser feita, somente por conta do redux estar sendo aplicado no projeto
        initialData = store.getState()

        markup = (
          <Provider store={store}>
            {markup}
          </Provider>
        )
        // ./

        // Configuração do React Loadable (obrigatória)
        const modules = [];
        markup = renderToString(
          <Capture report={moduleName => modules.push(moduleName)}>
            { markup }
          </Capture>
        );
        const bundles = getBundles(stats, modules);
        const chunks = bundles.filter(bundle => bundle.file.endsWith('.js'));
        assets.chunks = chunks 
        // ./




        resposta.status(status).send(
          `<!doctype html>
          ${renderToStaticMarkup(
              <Html assets={assets} markup={markup} initialState={initialData} />
            )
          }`
        );
      })
  });

export default server;
