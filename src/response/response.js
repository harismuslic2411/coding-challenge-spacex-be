'use-strict';

exports.baseResponse = function(res, status, success, message, data){
  //Console log for Google cloud platform server logs
  console.log(message);
  res.status(status).json({
    success,
    message,
    data,
  });
};