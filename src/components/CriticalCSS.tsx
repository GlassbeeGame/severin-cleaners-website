export default function CriticalCSS() {
  return (
    <style dangerouslySetInnerHTML={{
      __html: `
        *{margin:0;padding:0;box-sizing:border-box}
        html{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}
        body{font-family:var(--font-inter),Inter,system-ui,-apple-system,sans-serif;line-height:1.6;color:#1a1a1a;background:#fff;overflow-x:hidden}
        .gradient-overlay{position:absolute;inset:0;background:linear-gradient(to bottom,rgba(0,0,0,0.7),rgba(0,0,0,0.5),rgba(0,0,0,0.7))}
        .btn{display:inline-flex;align-items:center;justify-content:center;padding:0.75rem 1.5rem;border-radius:0.5rem;font-weight:700;transition:all 200ms}
        .btn-primary{background:#3b82f6;color:#fff;box-shadow:0 10px 15px -3px rgba(0,0,0,0.1)}
        .btn-primary:hover{background:#2563eb;transform:translateY(-0.125rem)}
        .btn-outline{border:2px solid #fff;color:#fff}
        .btn-outline:hover{background:#fff;color:#111827}
        h1{font-size:1.875rem;font-weight:900;line-height:1.2}
        @media(min-width:768px){h1{font-size:3rem}}
        @media(min-width:1024px){h1{font-size:4.5rem}}
      `
    }} />
  );
}
