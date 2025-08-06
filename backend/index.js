const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Low, JSONFile } = require('lowdb');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Налаштування lowdb
const adapter = new JSONFile('db.json');
const db = new Low(adapter);

(async () => {
  await db.read();
  db.data ||= {
    geoReplaces: [],
    stories: [],
    automationTypes: [],
    automationFormats: [],
    geoQueues: [],
    overlayClips: [],
    backgroundMusic: []
  };
  await db.write();
})();

// GET /geo-replaces
app.get('/geo-replaces', async (req, res) => {
  await db.read();
  res.json(db.data.geoReplaces);
});

// GET /stories/history
app.get('/stories/history', async (req, res) => {
  await db.read();
  res.json(db.data.stories);
});

// GET /automation/types/get-all
app.get('/automation/types/get-all', async (req, res) => {
  await db.read();
  res.json(db.data.automationTypes);
});

// GET /automation/formats/get-all
app.get('/automation/formats/get-all', async (req, res) => {
  await db.read();
  res.json(db.data.automationFormats);
});

// GET /geo-queues
app.get('/geo-queues', async (req, res) => {
  await db.read();
  res.json(db.data.geoQueues);
});

// GET /overlay-clips
app.get('/overlay-clips', async (req, res) => {
  await db.read();
  res.json(db.data.overlayClips);
});

// GET /background-music
app.get('/background-music', async (req, res) => {
  await db.read();
  res.json(db.data.backgroundMusic);
});

// POST /stories/history
app.post('/stories/history', async (req, res) => {
  await db.read();
  const newStory = { id: Date.now(), ...req.body };
  db.data.stories.push(newStory);
  await db.write();
  res.status(201).json(newStory);
});

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Backend listening on port ${PORT}`));
