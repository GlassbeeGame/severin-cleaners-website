import Script from 'next/script'

const GTM_ID = 'GTM-NHF5RSGT'
const GA4_ID = 'G-R7HY3CPQ7K'

export function GoogleTagManagerHead() {
  return (
    <>
      {/* Google Tag Manager - Deferred with requestIdleCallback for minimal TBT impact */}
      <Script
        id="gtm-script"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
(function() {
  function loadGTM() {
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${GTM_ID}');
  }
  if ('requestIdleCallback' in window) {
    requestIdleCallback(loadGTM, { timeout: 2000 });
  } else {
    setTimeout(loadGTM, 1000);
  }
})();
          `,
        }}
      />

      {/* Google Analytics 4 - Deferred with requestIdleCallback for minimal TBT impact */}
      <Script
        id="ga4-script"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
(function() {
  function loadGA4() {
    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=${GA4_ID}';
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA4_ID}', {
      page_path: window.location.pathname,
    });
  }
  if ('requestIdleCallback' in window) {
    requestIdleCallback(loadGA4, { timeout: 2000 });
  } else {
    setTimeout(loadGA4, 1000);
  }
})();
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
