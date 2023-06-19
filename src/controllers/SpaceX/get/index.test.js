const axios = require('axios');
const { getSpaceXLaunches } = require('./index');

jest.mock('../../../response', () => ({
    baseResponse: jest.fn(),
}));
jest.mock('../../../constants', () => ({
    UrlConstants: {
        PORT: 4200,
        SERVER_URL: 'http://localhost:4200',
        FRONTEND_URL: 'http://localhost:3000',
        SPACEX_URL: 'https://api.spacexdata.com/v5/launches'
    },
    Statuses: {
        SUCCESS_GET: 200,
        SUCCESS_POST: 201,
        NO_IMAGES: 404, // resource not found
        ERROR_GET: 500,
    },
    Messages: {
        SUCCESS_GET: 'Data succesfully retrieved',
        SUCCESS_POST: 'Data succesfully posted',
        NO_IMAGES: 'Resource not found',
        ERROR_GET: 'Something went wrong, please try again'
    }
}));

jest.mock('axios');

describe('getSpaceXLaunches', () => {
  let req;
  let res;

  beforeEach(() => {
    req = {}; // Mock request object
    res = {}; // Mock response object
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should return success response with a random image URL', async () => {
    const flickrData = {
      original: ['image-url-1', 'image-url-2', 'image-url-3'],
    };

    axios.get.mockResolvedValueOnce({ data: { links: { flickr: flickrData } } });

    await getSpaceXLaunches(req, res);

    expect(require('../../../response').baseResponse).toHaveBeenCalledWith(
      expect.anything(),
      200,
      true,
      'Data succesfully retrieved',
      expect.objectContaining({ url: expect.any(String) })
    );
  });

  test('should return no images response when flickr.original is empty', async () => {
    const flickrData = {
      original: [],
    };

    axios.get.mockResolvedValueOnce({ data: { links: { flickr: flickrData } } });

    await getSpaceXLaunches(req, res);

    expect(require('../../../response').baseResponse).toHaveBeenCalledWith(
        expect.anything(),
        404,
        true,
        'Resource not found',
        expect.objectContaining({ url: expect.any(String) })
    );
  });

  test('should return error response when an exception occurs', async () => {
    const errorMessage = 'Something went wrong';

    axios.get.mockRejectedValueOnce(new Error(errorMessage));

    await getSpaceXLaunches(req, res);

    expect(require('../../../response').baseResponse).toHaveBeenCalledWith(
        expect.anything(),
        500,
        false,
        'Something went wrong, please try again',
        expect.objectContaining({ url: expect.any(String) })
    );
  });

});
