'use-strict'

const { default: axios } = require('axios');
const { UrlConstants, Messages, Statuses } = require('../../../constants');
const { baseResponse } = require('../../../response');

const axiosConfig = {
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
};

exports.getSpaceXLaunches = async function (req, res) {
    /* Id should be extracted from request */
    /* const {id} = req.query */
    /* hardcoded for example purposes */
    const id = '5eb87ce7ffd86e000604b33b';

    const BASE_URL = UrlConstants.SPACEX_URL;

    const URL = `${BASE_URL}/${id}`;

    try{
        const getItem = await axios.get(URL, axiosConfig);

        const data = getItem.data;

        if(data.links.flickr.original.length === 0){
            const response = {
                url: ''
            }
            baseResponse(res, Statuses.NO_IMAGES, true, Messages.NO_IMAGES, response);
        }

        const max = data.links.flickr.original.length;
        const randomNumber = Math.floor((Math.random() * max));
        const url = data.links.flickr.original[randomNumber];

        const response = {
            url
        }

        baseResponse(res, Statuses.SUCCESS_GET, true, Messages.SUCCESS_GET, response);
    } catch(e){
        const response = {
            url: ''
        }
        baseResponse(res, Statuses.ERROR_GET, false, Messages.ERROR_GET, response);
    }

}