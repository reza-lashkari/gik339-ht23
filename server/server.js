const express = require('express');
const server = express();

server
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Methods', '*');

    next();
  });

server.get('/users', (req, res) => {
  res.send([
    { firstName: 'Mikaela', lastName: 'Hedberg', username: 'mie' },
    { firstName: 'Alexander', lastName: 'Karlsson', username: 'alk' }
  ]);
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000.');
});
