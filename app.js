const https = require("https");
const fs = require("fs");
const express = require("express");
const app = express();
const db = require("./database"); // Import the nedb database

// Middleware to parse JSON bodies
app.use(express.json());

// Define a simple route for testing
app.get("/", (req, res) => {
  res.send("Log Service is  securely!");
});

// Add log entry endpoint
app.post("/add-log", (req, res) => {
  //extracts the message property from the request's body.
  const { message } = req.body;
  if (!message) {
    return res.status(400).send("Log message is required");
  }
  //there is a message, and therefore:
  //creates a new object logEntry
  //containing the message and the current timestamp.
  const logEntry = {
    message,
    timestamp: new Date(),
  };
  //uses nedb insert method to try add logEntry to the database.
  db.insert(logEntry, (err, newDoc) => {
    if (err) {
      return res.status(500).send("Error adding log entry");
    }
    res.status(201).send(newDoc);
  });
});

// Search log entries endpoint
app.get("/search-logs", (req, res) => {
  const { keyword } = req.query;
  if (!keyword) {
    return res.status(400).send("Search keyword is required");
  }

  // Using nedb find method to search for the log entries that contain the keyword
  //The results are sorted by the timestamp in descending order,
  //and only the top 10 results are returned.
  db.find({ message: new RegExp(keyword, "i") })
    .sort({ timestamp: -1 })
    .limit(10)
    .exec((err, docs) => {
      if (err) {
        return res.status(500).send("Error searching for log entries");
      }
      res.status(200).send(docs);
    });
});

// Set the server to listen on a port
const PORT = process.env.PORT || 3000;
// Read the SSL key and certificate files for HTTPS configuration
const httpsOptions = {
  key: fs.readFileSync("./key.pem"),
  cert: fs.readFileSync("./cert.pem"),
};
//Create an HTTPS server using the provided options and the Express app
//and start listening on the specified port for HTTPS requests
https.createServer(httpsOptions, app).listen(PORT, () => {
  console.log(`Server is running securely on https://localhost:${PORT}`);
});
