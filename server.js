const express = require('express');
const server = express();
const sqlite3 = require('sqlite3');

server.use(express.json()).use(express.urlencoded({ extended: false }));

server.get('/users/', (req, res) => {
  const method = req.method;
  const url = req.url;

  const db = new sqlite3.Database('./gik339-L4.db');
  const sql = 'SELECT * FROM users';

  db.all(sql, (err, rows) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(rows);
    }
  });

  //res.send(`Du gjorde en ${method}-förfrågan till ${req.url}`);
});

server.post('/users/', (req, res) => {
  const body = req.body;

  //Spara innehåll i body till databasen
  //Skicka tillbaka svar att det gick bra.

  res.send(body);
});

server.put('/users/:id/', (req, res) => {
  const params = req.params;
  res.send(params);
});

server.listen(3000, () => console.log('Server running'));
