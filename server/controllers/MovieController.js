var restful = require('node-restful');

module.exports = function(app, route) {

  // Setup the controller for REST
  var rest = restful.model(
    'movie',
    app.models.movie
  ).methods(['get', 'put', 'post', 'delete']);

  // Register this REST Api with the application
  rest.register(app, route);

  // Return the middleware
  return function(req, res, next) {
    next();
  };

};