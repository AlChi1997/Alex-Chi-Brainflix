const express = require('express');
const app = express();
const port = process.env.PORT || process.argv[2] || 8080;
const { v4: uuidv4 } = require('uuid');
const cors = require('cors');
const videos = require('./videolist-data/videos');
const accomodation = require('./videos/accommodation');
const cruising = require('./videos/cruising');
const airline = require('./videos/airline');
const bmx = require('./videos/bmx');
const boutique = require('./videos/boutique');
const hiddengem = require('./videos/hiddengem');
const train = require('./videos/train');
const travelhealth = require('./videos/travelhealth');
const travelpro = require('./videos/travelpro');
const allVideos = [accomodation, cruising, airline, bmx, boutique, hiddengem, train, travelhealth, travelpro];

app.use(express.json());

app.use(cors());

app.get('/videos', (req, res) => {
    //send videos array as JSON response
    res.json(videos);
});

app.get('/videos/:id', (req, res) => {
  const videoId = req.params.id;

  const video = allVideos.find(video => video.id === videoId);

  if (video) {
    res.json(video);
  } else {
    res.status(404).json({ message: `Video with id ${videoId} not found` });
  }
});

app.listen(port, () => {
    console.log("listening on port 8080");
});