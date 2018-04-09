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
import { StaticRouter, Route } from 'react-router-dom';
import { renderToStaticMarkup } from 'react-dom/server';

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

// !!!Remover!!!
import { renderToString } from 'react-dom/server';

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const server = express();
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



    const context = {};
    const modules = [];
    const markup = renderToString(
      <Capture report={moduleName => modules.push(moduleName)}>
        <StaticRouter context={context} location={request.url}>
          <Routes />
        </StaticRouter>
      </Capture>
    );

    // 4 - Extrai o componente
    getCurrentComponent(activeRoute.props)
      .then((component) => extractInitialData(component))
      .then(({component, initialData}) => {
        
          // Setup da aplicação no server (obrigatório)
        const bundles = getBundles(stats, modules);
        const chunks = bundles.filter(bundle => bundle.file.endsWith('.js'));

        console.log(initialData)

        resposta.status(200).send(
          `<!doctype html>
  <html lang="">
    <head>
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta charSet='utf-8' />
      <title>Welcome to Razzle</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      ${assets.client.css
        ? `<link rel="stylesheet" href="${assets.client.css}">`
        : ''}
    </head>
    <body>
      <div id="root">${markup}</div>
      ${process.env.NODE_ENV === 'production'
        ? `<script src="${assets.client.js}"></script>`
        : `<script src="${assets.client.js}" crossorigin></script>`}
      ${chunks.map(chunk => (process.env.NODE_ENV === 'production'
        ? `<script src="/${chunk.file}"></script>`
        : `<script src="http://${process.env.HOST}:${parseInt(process.env.PORT, 10) + 1}/${chunk.file}"></script>`
      )).join('\n')}
      <script>window.main();</script>
    </body>
  </html>`
        );
      })
  });

export default server;
