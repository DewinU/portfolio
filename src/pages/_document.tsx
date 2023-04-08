import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
import { GTM_ID } from '../lib/gtm'

export default function Document() {
  return (
    <Html lang='en'>
      <body>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height='0'
            width='0'
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
