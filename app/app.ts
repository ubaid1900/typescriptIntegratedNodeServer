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

app.post('/upload', uploader.array('files[]'), function (req, res) {
  const fl: FileList = req.files;
  res.send({
    responseText: `received ${req.files.length} file(s) to upload`,
    serialized: `${fl[0].filename}, ${fl[0].originalfileName}`
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});