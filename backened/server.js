const { response } = require('express');

const express = require('express');
const notes = require('./data/notes');
const dotenv = require('dotenv');

const app = express();

dotenv.config();

app.get('/', (req, res) => {
  res.send('Api is running');
}); //gets data from backened to frontend //It has a callback function (req, res) that listen to the incoming request req object and respond accordingly using res response object.

app.get('/api/notes', (req, res) => {
  res.json(notes);
});

app.get('/api/notes/:id', (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);
  res.send(note);
});

const PORT = process.env.POSRT || 5000;

app.listen(PORT, console.log(`Servers started on port ${PORT}`)); // template string
