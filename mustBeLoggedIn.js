module.exports = function() {
    return (req, res, next) => {
      // Xhecks if the user is authenticated
      if (req.isAuthenticated()) {
        return next();
      }
      // 403 error for users who have not been authenticated but should be
      if (req.accepts('json')) {
        res.status(403).json({
          message: 'You must be logged in to perform this action.'
        });
      } else {
        // otherwise, try and render a view named "forbidden"
        res.status(403).render('forbidden');
      }
    }
  }
  