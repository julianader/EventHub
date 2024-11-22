const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Test Route
app.get('/', (req, res) => {
  res.send('Server is running...');
});

// Server Listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
