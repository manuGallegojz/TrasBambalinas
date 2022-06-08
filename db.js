const admin = require("firebase-admin");

const serviceAccount = require("./database/ecommerce-coder-c7f51-firebase-adminsdk-tzfal-89ac4c1aa9.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "http://ecommerce-coder.firebaseio.com"
});

const db = admin.firestore();

module.exports = db;