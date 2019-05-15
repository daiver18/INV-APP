const admin = require('firebase-admin');

// eslint-disable-next-line consistent-return
module.exports = function(req, res) {
    if (!req.body.userName || !req.body.password) {
        return res.status(422).send({error: 'Bad Input'});
    }
    const userName = String(req.body.userName);
    const password = String(req.body.password);
    admin.auth().getUser(userName)
        .then(() => optenerDatos())
        .catch(err => res.status(422).send(err));

    function optenerDatos(){
        admin.database().ref('users/' + userName).once('value', snapshot => {
            const user = snapshot.val();
            if (user.password !== password) {
                return res.status(422).send({error: 'usuario o contraseña incorrecta'})
            }
            return creadorToken(user)
        })
    }
    function creadorToken(user){
        const additionalClains = {
            rol: user.rol_admin
        }
    admin.auth().createCustomToken(userName, additionalClains)
        .then(customToken => res.send({ token: customToken}))
        .catch(err => res.status(422).send(err));
    }
}