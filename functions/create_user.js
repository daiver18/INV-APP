const admin = require('firebase-admin');

// eslint-disable-next-line consistent-return
module.exports = function(req, res) {
    if (!req.body.userName || !req.body.pass) {
        return res.status(422).send({error: 'Bad Input'});
    }
    const userName = String(req.body.userName);
    const pass = String(req.body.pass);
    const rol_admin = Boolean(req.body.rol_admin);

        admin.auth().createUser({ uid: userName })
        .then( user => {
            return res.send(user),
            addDatos(userName)
        })
        .catch(err => res.status(422).send({error: err}));}
    function addDatos(userName) {
        admin.database().ref('users/' + userName ).set({
            userName: userName,
            pass: pass,
            rol_admin
        })
    }
