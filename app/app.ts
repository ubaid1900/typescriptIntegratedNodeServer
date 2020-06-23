// lib/app.ts
import express = require('express');
var multer = require('multer');
var uploader = multer({ dest: 'uploads/' });
var cors = require('cors');


// Create a new express application instance
const app: express.Application = express();
app.use(cors())
app.get('/', function (req, res) {
  res.send({ responseText: 'Hello World! Keep on going' });
});
var times = [
  { id: 1, name: 'Fajr', preferredTime: '5:00 AM' },
  { id: 2, name: 'Zuhr', preferredTime: '1:30 PM' },
  { id: 3, name: 'Asr', preferredTime: '5:15 PM' },
  { id: 4, name: 'Maghrib', preferredTime: '7:00 PM' },
  { id: 5, name: 'Isha', preferredTime: '8:15 PM' }];
app.get('/prayTimes', function (req, res) {
  res.send({ times: times });
});
app.get('/prayTimes/byname/:prayerName', function (req, res) {
  res.send({ times: times.find(f => f.name.toLowerCase() === req.params.prayerName.toLowerCase()) });
});
app.get('/prayTimes/:prayerId', function (req, res) {
  res.send({ times: times.find(f => f.id === +req.params.prayerId) });
});

// app.post('/upload', uploader.array('files[]'), function (req, res) {
//   const fl: FileList = req.files;
//   res.send({
//     responseText: `received ${req.files.length} file(s) to upload`,
//     serialized: `${fl[0].filename}, ${fl[0].originalfileName}`
//   });
// });

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});