const express = require('express');

const app = express();

// Health check endpoint
app.get('/', (req, res) => {
  res.status(200).send('OK');
});

// Fallback for any other routes
app.use((req, res) => {
  res.status(404).send('Not Found');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Health check service is running on http://0.0.0.0:${PORT}`);
});