// const sqlite3 = require('sqlite3');
import sqlite3 from "sqlite3";

const db = new sqlite3.Database(
  "./db/sqlite.db",
  sqlite3.OPEN_READWRITE,
  (err) => {
    if (err) return console.error(err.message);
  }
);

export default db;
