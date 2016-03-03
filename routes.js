
module.exports = function(app) {
  app.get('/users', function(req, res, next) {
  // if (err) return next (err);
  var users = ['bill', 'joe']
  res.status(200).json(users)
});

}