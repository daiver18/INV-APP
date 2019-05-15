const admin = require('firebase-admin');

// eslint-disable-next-line consistent-return
module.exports = function(req, res) {
    if (!req.body.userName || !req.body.password) {
        return res.status(422).send({error: 'Bad Input'});
    }
    const userName = String(req.body.userName);
    const password = String(req.body.password);
    const rol_admin = Boolean(req.body.rol_admin);

        admin.auth().createUser({ uid: userName })
        .then( () => {
            return addDatos(userName, password, rol_admin)
        })
        .catch(err => res.status(422).send({error: err}));}

    async function addDatos(userName, password, rol_admin) {
        await admin.database().ref('users/' + userName ).set({
            userName: userName,
            password: password,
            rol_admin
        })
        res.send('create success')
    }
