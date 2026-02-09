require('dotenv').config();

const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Health check
app.get('/', (req, res) => {
  res.send('USSD News Server Running');
});

// USSD News route
const ussdNewsRoutes = require('./ussd-news');
app.use('/ussd/news', ussdNewsRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
