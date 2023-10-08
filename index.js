// Import the required Node.js modules
const http = require('http');

// Define the hostname and port for your server
const hostname = '127.0.0.1'; // The loopback address for your local machine
const port = 3000; // Port number (you can change it to any available port)

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set the response status and headers
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  
  // Send a simple "Hello, World!" message as the response
  //res.end('Hello, World!\n');
});

// Start the server and listen on the specified hostname and port
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
