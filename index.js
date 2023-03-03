const mysql = require("mariadb");

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "comicbook",
  port: "3306",
});
conn.connect();

conn.query(
  "create table books (number int not null auto_increment primary key, genre varchar(20) not null, name varchar(50) not null, writer varchar(30) not null, releasedate date not null);",
  (error, result, fields) => {
    if (error) throw error;
    console.log(result);
  }
);
conn.query("describe books", (error, result, fields) => {
  if (error) throw error;
  console.log(result);
});
conn.end();
