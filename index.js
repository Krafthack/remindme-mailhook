let express = require('express');
var bodyParser = require('body-parser')
var multer = require('multer');
var mongoose = require('mongoose');

const PORT = process.env.PORT || 8000;
const MONGODB = process.env.MONGOLAB_URI || 'mongodb://localhost/remindme';

mongoose.connect(MONGODB);

var Event = mongoose.model('Event', {
  type: String,
  createdAt: Date,
  payload: Object,
  query: Object
});

var app = express();

app.use(bodyParser.json());
app.use(multer());

app.post('/webhook/email', (req, res) => {
  var event = new Event({type: 'Mail', createdAt: Date.now()});
  event.payload = req.body;
  event.save((err) => {
    if (err) return res.status(500).send('ERROR');
    else return res.send('OK');
  });
});

app.get('/', (req, res) => res.send('Hello world'));

app.listen(PORT, () => console.log('Server is running at ' + PORT));
