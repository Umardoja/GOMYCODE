const express = require('express');
const router = express.Router();
const { createNewsApp } = require('./newsApp');

const newsApp = createNewsApp();

router.post('/news', (req, res) => {
  console.log('🔥 USSD HIT 🔥');
  console.log(req.body);

  res.set('Content-Type', 'text/plain');
  res.send('END Test successful');
});

router.post('/', async (req, res) => {
  try {
    const { sessionId, serviceCode, phoneNumber, text } = req.body;

    if (!sessionId || !phoneNumber) {
      return res.send('END Invalid request');
    }

    const response = await newsApp.processRequest({
      sessionId,
      serviceCode,
      phoneNumber,
      text: text || ''
    });

    res.set('Content-Type', 'text/plain');
    res.send(response);
  } catch (err) {
    console.error('USSD error:', err);
    res.send('END Service unavailable. Try again.');
  }
});

module.exports = router;

