const express = require('express');
const router = express.Router();
const { getSpaceXLaunches } = require('../controllers/SpaceX/get');

const routes = (app) => {

    router.get('/spacex/launch', getSpaceXLaunches);
  
    app.use(router);
};

module.exports = routes;