const data = require("./fakeData");
const checkPermissions = require("./permissions");

const checkUpdatePermission = checkPermissions(["update"]);

module.exports = function(req, res) {
  const id = req.query.id;
  const { name, job } = req.body;

  const userIndex = data.findIndex(user => user.id === id);

  if (userIndex !== -1) {
    checkUpdatePermission(req, res, () => {
      const user = data[userIndex];
      user.name = name;
      user.job = job;
      res.send(user);
    });
  } else {
    res.status(404).send('Usuário não encontrado');
  }
};