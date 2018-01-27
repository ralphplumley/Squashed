const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(`${__dirname}/../react-client/dist`));

app.get('/*', (req, res) => {
  console.log(__dirname);
  res.sendFile(path.join(`${__dirname}/../react-client/dist`, 'index.html'));
});

app.get('/', (req, res) => {
  res.status(200).json();
});

app.get('/testing', (req, res) => {
  res.status(200);
  res.send('GET request to testing');
});


app.listen(port, () => {
  console.log('listening on port 3000!');
});

module.exports = app;
