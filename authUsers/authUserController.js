const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Auth User Service is running');
});
app.get('/users/:id', (req, res) => {});
app.post('/users', (req, res) => {});
app.put('/users/:id', (req, res) => {});
app.delete('/users/:id', (req, res) => {});

module.exports = app;