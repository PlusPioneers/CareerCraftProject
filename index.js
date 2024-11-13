const express = require('express'); // Import the Express library
const app = express(); // Create an Express app
const PORT = 3000; // The port number your server will run on

// Create a simple route
app.get('/', (req, res) => {
  res.send('Hello, Mohammed! Your server is running!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

