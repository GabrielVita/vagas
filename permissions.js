const checkPermissions = (requiredPermissions) => {
    return (req, res, next) => {
      const name = req.query.name;
  
      const user = data.find((user) => user.name === name);
  
      if (user && user.permissions && requiredPermissions.every((permission) => user.permissions[permission])) {   
        next();
      } else {
        res.status(403).send("Permissão negada");
      }
    };
  };
  
  module.exports = checkPermissions;
  