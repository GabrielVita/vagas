const data = require('./fakeData');

module.exports = function(req, res) {
    const name = req.query.name;
    
    const user = data.find(user => user.name === name);

    if (user) {
        user.readCount = user.readCount ? user.readCount + 1 : 1;

        res.send(`Usuário ${name} foi lido ${user.readCount} vezes.`);
    } else {
        res.status(404).send('Usuário não encontrado.');
    }
};
