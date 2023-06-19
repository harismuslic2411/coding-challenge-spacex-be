'use-strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const LocalServer = require('./src/constants');

const corsOptions = {
  origin: [
    `${LocalServer.SERVER_URL}`,
    `${LocalServer.FRONTEND_URL}`
  ],
};

//Middleware
app.use(bodyParser.json({ limit: '20mb' }));
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
initRoutes(app);

//Server
const PORT = process.env.PORT || LocalServer.PORT;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});