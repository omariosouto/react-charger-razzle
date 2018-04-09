import React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import serialize from 'serialize-javascript'

const Html = ({ assets, markup, initialState }) => {
    const body = markup;
    const head = Helmet.renderStatic()

    return (
        <html lang="en-US">
        <head>
            {head.title.toComponent()}
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            {head.meta.toComponent()}
            {head.link.toComponent()}
            {head.script.toComponent()}

            {assets.client.css
                ? <link rel="stylesheet" href={assets.client.css} />
                : ''}
            {initialState && <script dangerouslySetInnerHTML={{ __html: `window.__PRELOADED_STATE__ = ${serialize(initialState)};` }} charSet="UTF-8"/> }
        </head>
        <body>
          <div id="root" dangerouslySetInnerHTML={{ __html: body }} />

          {process.env.NODE_ENV === 'production'
            ? <script src={assets.client.js}></script>
            : <script src={assets.client.js} crossOrigin="true"></script>}

          {assets.chunks.map(chunk => (process.env.NODE_ENV === 'production'
            ? <script src={chunk.file}></script>
            : <script src={`http://${process.env.HOST}:${parseInt(process.env.PORT, 10) + 1}/${chunk.file}`}></script>
          ))}
          <script>window.main();</script>
        </body>
        </html>
    )

}

Html.propTypes = {
    assets: PropTypes.object.isRequired,
    markup: PropTypes.node.isRequired,
    initialState: PropTypes.object.isRequired
};

export default Html