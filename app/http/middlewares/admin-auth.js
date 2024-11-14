const admin_auth = (req, res, next) => {
    if (req.isAuthenticated() && req.user.role==="admin") {
      return next();
    }
    return res.redirect("/");
  };
  
  export { admin_auth };
  