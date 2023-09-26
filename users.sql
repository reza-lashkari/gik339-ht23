-- SQLite

CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT ,
	firstName TEXT NOT NULL,
  lastName TEXT NOT NULL); 

	
INSERT INTO users (firstName, lastName) 
VALUES ("Mikaela", "Hedberg");

SELECT * FROM users; 

