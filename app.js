const express = require('express');
const cors = require('cors');

const options = {
  origin: [
    'http://localhost:3000',
    'http://localhost:3001',
    'http://127.0.0.1:3000',
  ],
  methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
  preflightContinue: false,
  optionsSuccessStatus: 204,
  allowedHeaders: ['Content-Type', 'origin', 'Authorization', 'Accept'],
  credentials: true,
};

const mongoose = require('mongoose');
const router = require('./routes/routs');

const app = express();

const { PORT = 3000 } = process.env;

mongoose.connect('mongodb://127.0.0.1/mestodb', {
});

app.use('*', cors(options));

app.use('/', express.json());

app.use('/', router);

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
}) 