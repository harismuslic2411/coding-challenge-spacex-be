'use-strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const initRoutes = require('./src/routes');
const { UrlConstants } = require('./src/constants');

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

//Server
const PORT = process.env.PORT || UrlConstants.PORT;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});