const express = require('express');
const app = express();
const port = process.env.PORT || process.argv[2] || 8080;
const { v4: uuidv4 } = require('uuid');
require ('dotenv').config();
const videos = require('./videolist-data/videos');
const accomodation = require('./videos/accommodation');
const cruising = require('./videos/cruising');
const airline = require('./videos/airline');
const BMX = require('./videos/BMX');
const boutique = require('./videos/boutique');
const hiddengem = require('./videos/hiddengem');
const train = require('./videos/train');
const travelhealth = require('./videos/travelhealth');
const travelpro = require('./videos/travelpro');

app.use(express.json());

app.get('/videos', (req, res) => {
    //send videos array as JSON response
    res.json(videos);
});

app.listen(port, () => {
    console.log("listening on port 8080");
});