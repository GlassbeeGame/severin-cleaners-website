export default function CriticalCSS() {
  return (
    <style dangerouslySetInnerHTML={{
      __html: `
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        html {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        body {
          font-family: var(--font-inter), Inter, system-ui, -apple-system, sans-serif;
          line-height: 1.6;
          color: #1a1a1a;
          background: #fff;
          overflow-x: hidden;
          font-display: swap;
          text-rendering: optimizeLegibility;
        }
        .gradient-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgb(0 0 0 / 0.7), rgb(0 0 0 / 0.5), rgb(0 0 0 / 0.7));
        }
        header {
          background: #fff;
          box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
          position: sticky;
          top: 0;
          z-index: 50;
        }
      `
    }} />
  );
}
