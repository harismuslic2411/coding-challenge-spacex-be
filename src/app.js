'use-strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const initRoutes = require('./routes');
const { UrlConstants } = require('./constants');

const corsOptions = {
  origin: [
    `${UrlConstants.SERVER_URL}`,
    `${UrlConstants.FRONTEND_URL}`
  ],
};

//Middleware
app.use(bodyParser.json({ limit: '20mb' }));
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
initRoutes(app);

module.exports = app;