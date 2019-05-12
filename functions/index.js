const admin = require('firebase-admin');
const functions = require('firebase-functions');
const serviceAccount = require('./service_account.json');
const createUser = require('./create_user');
const login = require('./login');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://inv-app-cfce0.firebaseio.com"
  });

  exports.createUser = functions.https.onRequest(createUser);
  exports.login = functions.https.onRequest(login);
