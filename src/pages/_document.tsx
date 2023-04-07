import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <Script
          id='tag-manager'
          strategy='worker'
          async
          src='https://www.googletagmanager.com/gtag/js?id=G-YE9GWTLB88'></Script>
        <Script
          id='google-analytics'
          strategy='worker'>{`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-YE9GWTLB88');`}</Script>
        <Script id='hotjar' strategy='worker'>
          {`(function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:3272577,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}
        </Script>
        {/* <Script id='google-tag-manager' strategy='worker'>
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-59LQQWQ');`}
        </Script> */}
      </Head>
      <body>
        {/* <noscript>
          <iframe
            src='https://www.googletagmanager.com/ns.html?id=GTM-59LQQWQ'
            height='0'
            width='0'
            className='invisible hidden'
          />
        </noscript> */}
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
