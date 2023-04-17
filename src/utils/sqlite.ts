import { Database } from 'sqlite3';

console.log(process.cwd())
const db = new Database('sqlite.db');

export default db;