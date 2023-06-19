'use-strict'

const { default: axios } = require('axios');
const { UrlConstants } = require('../../../constants');

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
    } catch(e){

    }

}