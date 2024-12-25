// Create web server
const express = require('express');
const app = express();
const path = require('path');

// Create a route for the comments
app.get('/comments', (req, res) => {
  res.sendFile(path.join(__dirname, 'comments.html'));
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});