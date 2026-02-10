export default function CriticalCSS() {
  return (
    <style dangerouslySetInnerHTML={{
      __html: `
        *{margin:0;padding:0;box-sizing:border-box}
        html{-webkit-font-smoothing:antialiased}
        body{font-family:var(--font-inter),Inter,system-ui,sans-serif;line-height:1.6;color:#1a1a1a;background:#fff}
        .gradient-overlay{position:absolute;inset:0;background:linear-gradient(to bottom,rgba(0,0,0,0.7),rgba(0,0,0,0.5),rgba(0,0,0,0.7))}
      `
    }} />
  );
}
