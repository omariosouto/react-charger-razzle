// Coisas do Node
import express from 'express';

// Lib responsável por AJAX
import 'universal-fetch';

// Helpers para o SSR
import { doRedirect,
        extractInitialData,
        getActiveRouteFromRoutes,
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

console.log(process.env.HOST,process.env.PORT)

server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', (request, resposta) => {
    let status = 200

    // 1 - Extrai a rota ativa
    const activeRoute = getActiveRouteFromRoutes(request.url, Routes)

    // 2 - Precisamos garantir que a rota 404 existe na aplicação.
    if(!activeRoute) { 
      resposta.send("Você deve criar uma rota que represente a 404 com o path='*'.")
      return false;
    }
    
    // 3 - Define um redirect caso necessário
    if(activeRoute.props.render) { 
      doRedirect(activeRoute, resposta.redirect)
      return false;
    }

    // 4 - Extrai o componente
    getCurrentComponent(activeRoute.props)
      .then((component) => extractInitialData(component))
      .then(({component, initialData}) => {        
        // Setup da aplicação no server (obrigatório)
        let markup = (
          <StaticRouter context={ initialData } location={request.url}>
            <Routes />
          </StaticRouter>
        )
        // ./

        // Configuração do Redux (opcional)
        const store = configuraStore(initialData)
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
