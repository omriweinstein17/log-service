const Datastore = require("nedb");
//This code creates a NeDB database file named logs.db and loads it automatically.
const db = new Datastore({ filename: "logs.db", autoload: true });

module.exports = db;
