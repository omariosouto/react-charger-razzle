import React from 'react'
import { renderToString } from 'react-dom/server'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import serialize from 'serialize-javascript'

const Html = ({ assets, markup, initialState }) => {
    const body = markup ? renderToString(markup) : '';
    const head = Helmet.renderStatic()

    return (
        <html lang="">
            <head>
                {head.title.toComponent()}
                {head.meta.toComponent()}
                {head.link.toComponent()}
                {head.script.toComponent()}

                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                {initialState && <script dangerouslySetInnerHTML={{ __html: `window.__PRELOADED_STATE__ = ${serialize(initialState)};` }} charSet="UTF-8"/>}
                {assets.client.css
                ? <link rel="stylesheet" href={assets.client.css} />
                : ''}
                {process.env.NODE_ENV === 'production'
                ? <script src={assets.client.js} defer></script>
                : <script src={assets.client.js} defer crossOrigin="true"></script>}
            </head>
        <body>
            <div id="root" dangerouslySetInnerHTML={{ __html: body }} />

        </body>
        </html>
    )

}

Html.propTypes = {
    assets: PropTypes.object,
    markup: PropTypes.node,
    initialState: PropTypes.object
};

export default Html