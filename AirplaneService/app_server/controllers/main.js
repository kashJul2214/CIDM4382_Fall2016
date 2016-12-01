
var request = require('request');
var apiOptions = {
  server : "https://ap-hw-mgmata1.c9users.io/"
};
if (process.env.NODE_ENV === 'production') {
  apiOptions.server = "https://getting-mean-loc8r.herokuapp.com";
}


/* GET home page */
module.exports.index = function(req, res){
res.render('index', { title: 'Airplane Speeds' });
};