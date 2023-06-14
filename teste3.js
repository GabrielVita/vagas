const data = require("./fakeData");
const checkPermissions = require("./permissions");

const checkDeletePermission = checkPermissions(["delete"]);

module.exports = function(req, res) {
 
  checkDeletePermission(req, res, () => {
    data.splice(userIndex, 1);
    res.send("Usuário excluído");
  });

};
