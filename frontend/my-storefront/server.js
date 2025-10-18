const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <html>
      <head><title>Storefront</title></head>
      <body style="padding: 50px; text-align: center; font-family: Arial;">
        <h1>🛍️ Storefront Running!</h1>
        <p>Basic HTTP server working on Termux</p>
        <p>Next step: Install Next.js properly</p>
        <div style="margin-top: 30px;">
          <div style="display: inline-block; padding: 20px; border: 1px solid #ccc; margin: 10px;">
            <h3>✅ HTTP Server</h3>
            <p>Working</p>
          </div>
        </div>
      </body>
    </html>
  `);
});

server.listen(3000, '0.0.0.0', () => {
  console.log('🚀 Storefront running at: http://localhost:3000');
});
