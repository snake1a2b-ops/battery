const http = require('http');

const server = http.createServer((req, res) => {
  // Allow cross-origin requests from your website
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'POST' && req.url === '/battery') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      const data = JSON.parse(body);
      console.log(`Visitor Battery: ${data.level}%`);
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Received');
    });
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(3000, () => {
  console.log('Server is running. Waiting for battery data...');
});
