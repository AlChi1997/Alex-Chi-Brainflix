const express = require('express');
const app = express();
const port = process.env.PORT || process.argv[2] || 8080;
const { v4: uuidv4 } = require('uuid');
const cors = require('cors');
const path = require('path');
const videos = require('./data/videolist-data/videos');
const accomodation = require('./data/videos/accommodation');
const cruising = require('./data/videos/cruising');
const airline = require('./data/videos/airline');
const bmx = require('./data/videos/bmx');
const boutique = require('./data/videos/boutique');
const hiddengem = require('./data/videos/hiddengem');
const train = require('./data/videos/train');
const travelhealth = require('./data/videos/travelhealth');
const travelpro = require('./data/videos/travelpro');
const allVideos = [accomodation, cruising, airline, bmx, boutique, hiddengem, train, travelhealth, travelpro];

app.use(express.json());

app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

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

app.post('/videos', (req, res) => {
    const id = req.body.id;
    const title = req.body.title;
    const description = req.body.description;
    const image = req.file;

    res.json({
        message: 'Video uploaded successfully'});
});

app.listen(port, () => {
    console.log("listening on port 8080");
});