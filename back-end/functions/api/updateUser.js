const functions = require("firebase-functions");
const admin = require("firebase-admin");
const cors = require("cors")({ origin: true });

/**
 * Mise à jour des données d'un utilisateur
 * @param body {String, Object}
 * @return {string} message de succès ou d'erreur
 * @forPlay https://updateuser-kiadtv5era-uc.a.run.app
 * @documentation https://firebase.google.com/docs/auth/admin/manage-users?hl=fr#update_a_user
*/

exports.updateUser = functions.https.onRequest((request, response) => {
    const uid = request.body.uid;
    const data = request.body.data;

    return cors (request, response, async () => {
        try {
            const userRecord = await admin.auth().updateUser(uid, data);
            response.send(userRecord.toJSON());
        } catch (error) {
            response.status(500).send(error);
        }
    });
});