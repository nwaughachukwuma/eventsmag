const functions = require('firebase-functions');
const admin = require('firebase-admin');
// initializes your application
admin.initializeApp(functions.config().firebase);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send('Hello from EventsMag!');
});

exports.sendPushNotification = functions.firestore
  .document('users/{userId}')
  .onCreate((snap, context) => {
    // gets standard JavaScript object from the new write
    const writeData = snap.data();
    console.log(writeData, context);
    const userId = context.params.userId; // writeData.uid;
    let payload = {
      notification: {
        title: 'Welcome to EventsMag',
        body: 'We are glad to have you onboard. Upload moments from your events and surf events by other users',
      },
      data: {
        title: 'Welcome to EventsMag',
        body: 'We are glad to have you onboard. Upload moments from your events and surf events by other users',
      },
    };
    const iosSpecific = {
      apns: {
        payload: {
          aps: {
            sound: 'default',
            badge: 1,
          },
        },
      },
    };
    const androidSpecific = {
      android: {
        ttl: 3600 * 1000,
        notification: {
          icon: 'stock_ticker_update',
          color: '#f45342',
          sound: 'notify',
        },
      },
    };
    // merge payload with android and ios specific payload options
    payload = { ...payload, ...androidSpecific, ...iosSpecific };
    // if push token is available in the snap.data() object
    let { pushToken } = writeData;
    // or collect them by accessing firestore
    return admin
      .firestore()
      // .collection('users').doc(userId)
      // .document(`users/${userId}`)
      .doc(`users/${userId}`)
      .get()
      .then(doc => {
        pushToken = doc.data().pushToken || pushToken;
        // sendToDevice can also accept an array of push tokens
        return admin.messaging().send({ ...payload, token: pushToken }) 
          // .sendToDevice(pushToken, payload, options) :=> this is the legacy method
          .then(response => {
            console.log('Notification sent successfully:', response);
          })
          .catch(error => {
            console.log('Notification failed, not sent:', error);
          });
      });
  });

