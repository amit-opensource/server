var restify = require('restify');
var crypto = require("crypto");

function respond(req, res, next) {
  res.contentType = 'json'; 
  res.send({oauth:crypto.randomBytes(30).toString('hex')});
  next();
}

function login(req, res, next) {
    res.contentType='json';
    res.send({status : req.body.status});
    next();
}

var server = restify.createServer();
server.get('/oauth', respond);
server.post('/login/:status', login);

server.listen(9000, function() {
  console.log('%s listening at %s', server.name, server.url);
});