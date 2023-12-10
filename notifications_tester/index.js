const {initializeApp} = require('firebase-admin/app');
const {getMessaging} = require('firebase-admin/messaging');
const admin = require('firebase-admin');
const express = require('express');
const cors = require('cors');

const serviceAccount = require('./futbolito-a8dea-d984b77af323.json');

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: '*',
  }),
);

app.use(
  cors({
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
  }),
);

app.use(function (req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  next();
});

initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

app.post('/send', function (req, res) {
  const {fcmToken, title, body, data} = req.body;

  const message = {
    notification: {
      title,
      body,
    },
    data,
    token: fcmToken,
  };

  getMessaging()
    .send(message)
    .then(response => {
      res.status(200).json({
        message: 'Successfully sent message',
        token: fcmToken,
      });
      console.log('Successfully sent message:', response);
    })
    .catch(error => {
      res.status(400);
      res.send(error);
      console.log('Error sending message:', error);
    });
});

app.listen(3000, function () {
  console.log('Server started on port 3000');
});
