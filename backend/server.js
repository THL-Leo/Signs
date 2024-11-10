// backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
const vision = require('@google-cloud/vision');
// Import Firebase Admin SDK and initialize it with service account credentials
const admin = require('firebase-admin');
const serviceAccount = require('./firebase-key.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://<your-database-name>.firebaseio.com"
});

const db = admin.firestore();
const app = express();
app.use(bodyParser.json());

// Initialize Google Cloud Vision client
const visionClient = new vision.ImageAnnotatorClient();

app.post('/recognize-face', async (req, res) => {
  const { imageData } = req.body;

  try {
    const [result] = await visionClient.faceDetection({ image: { content: imageData } });
    const faces = result.faceAnnotations;
    res.json(faces.length > 0 ? { name: "Recognized Person" } : { name: "Unknown" });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(3000, () => {
  console.log('Backend running on port 3000');
});
