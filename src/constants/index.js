'use-strict';

const UrlConstants = {
    PORT: 4200,
    SERVER_URL: 'http://localhost:4200',
    FRONTEND_URL: 'http://localhost:3000',
    SPACEX_URL: 'https://api.spacexdata.com/v5/launches'
};

const Statuses = {
    SUCCESS_GET: 200,
    SUCCESS_POST: 201,
    NO_IMAGES: 404, // resource not found
    ERROR_GET: 500, //set default to 500
}

const Messages = {
    SUCCESS_GET: 'Data succesfully retrieved',
    SUCCESS_POST: 'Data succesfully posted',
    NO_IMAGES: 'Resource not found',
    ERROR_GET: 'Something went wront, please try again'
}

module.exports = {
    UrlConstants,
    Statuses,
    Messages
}

exports.UrlConstants = UrlConstants;