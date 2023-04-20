// const sqlite3 = require('sqlite3');
import sqlite3 from "sqlite3";

const db = new sqlite3.Database(
  "./db/sqlite.db",
  sqlite3.OPEN_READWRITE,
  (err) => {
    if (err) return console.error(err.message);
  }
);

export function addContactToDb(data: any) {
  console.log([
    data["first_name"],
    data["last_name"],
    data["pet"],
    data["married"],
  ]);
  return new Promise((resolve, reject) => {
    db.run(
      "INSERT INTO toy_table (name, surname, pet, married) VALUES (?, ?, ?, ?);",
      [data["first_name"], data["last_name"], data["pet"], data["married"]],
      function (err) {
        if (err) {
          reject(err.message);
        } else {
          resolve("Query submitted succesfully.");
        }
      }
    );
  });
}

export default db;
