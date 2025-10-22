import Script from 'next/script'

const GTM_ID = 'GTM-NHF5RSGT'
const GA4_ID = 'G-R7HY3CPQ7K'

export function GoogleTagManagerHead() {
  return (
    <>
      {/* Google Tag Manager - Lazy load for better performance */}
      <Script
        id="gtm-script"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');
          `,
        }}
      />

      {/* Google Analytics 4 - Load after page interactive */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
        strategy="lazyOnload"
      />
      <Script
        id="ga4-script"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA4_ID}', {
  page_path: window.location.pathname,
});
          `,
        }}
      />
    </>
  )
}

export function GoogleTagManagerBody() {
  return (
    <noscript>
      <iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-NHF5RSGT"
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
      />
    </noscript>
  )
}
