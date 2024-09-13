// Create web server
// Start web server
// Listen for requests
// Handle requests
// Read file
// Parse file
// Send response
// Stop web server

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // Set status code and header
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  // Read file
  fs.readFile('comments.json', 'utf8', (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.end('Internal Server Error');
      return;
    }
    // Parse file
    const comments = JSON.parse(data);

    // Send response
    res.end(`
      <h1>Comments</h1>
      <ul>
        ${comments.map(comment => `<li>${comment}</li>`).join('')}
      </ul>
    `);
  });
});

const PORT = 3000;
const HOST = 'localhost';

server.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}`);
});

server.on('error', err => {
  console.error(err);
});

server.on('close', () => {
  console.log('Server stopped');
});

// Stop web server
// server.close();
