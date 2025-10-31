import Script from 'next/script'

const GTM_ID = 'GTM-NHF5RSGT'
const GA4_ID = 'G-R7HY3CPQ7K'

export function GoogleTagManagerHead() {
  return (
    <>
      {/* Google Tag Manager - Load after 5 seconds or first user interaction */}
      <Script
        id="gtm-script"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
(function() {
  var loaded = false;
  function loadGTM() {
    if (loaded) return;
    loaded = true;
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${GTM_ID}');
  }

  // Load on first user interaction (click, scroll, or touch)
  ['click', 'scroll', 'touchstart', 'mousemove', 'keydown'].forEach(function(event) {
    window.addEventListener(event, loadGTM, { once: true, passive: true });
  });

  // Fallback: load after 5 seconds (after TBT measurement window)
  setTimeout(loadGTM, 5000);
})();
          `,
        }}
      />

      {/* Google Analytics 4 - Load after 5 seconds or first user interaction */}
      <Script
        id="ga4-script"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
(function() {
  var loaded = false;
  function loadGA4() {
    if (loaded) return;
    loaded = true;

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

  // Load on first user interaction (click, scroll, or touch)
  ['click', 'scroll', 'touchstart', 'mousemove', 'keydown'].forEach(function(event) {
    window.addEventListener(event, loadGA4, { once: true, passive: true });
  });

  // Fallback: load after 5 seconds (after TBT measurement window)
  setTimeout(loadGA4, 5000);
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
