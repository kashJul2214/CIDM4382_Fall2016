var request = require('request');
var apiOptions = {
  server : "https://ap-hw-mgmata1.c9users.io/"
};
if (process.env.NODE_ENV === 'production') {
  apiOptions.server = "https://getting-mean-loc8r.herokuapp.com";
}

var renderFlapsInfo = function(req, res, responseBody){
    var message;
    if (!(responseBody instanceof Array)) {
        message = "API lookup error";
        responseBody = [];
    } else {
        if (!responseBody.length) {
            message = "No flap settings found";
        }   
    }
    res.render('flaps', { title: 'Flaps Settings' });
    flaps: responseBody;
    
};


module.exports.getFlapsInfo = function(req, res){
  var requestOptions, path;
  path = '/api/flapstables';
  requestOptions = {
    url : apiOptions.server + path,
    method : "GET",
    json : {},
  };
  request(
    requestOptions,
    function(err, response, body) {
      renderFlapsInfo(req, res, body);
    }
  );
};