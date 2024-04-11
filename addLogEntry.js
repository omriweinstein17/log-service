//Includes the fetch function to make HTTP requests.
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
const https = require("https");

// Create an https agent that ignores unauthorized certificates
const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});

//defines an asynchronous function addLogEntry that takes a message parameter
const addLogEntry = async (message) => {
  //Using await to call fetch, which makes an HTTP POST request to API's /add-log endpoint
  const response = await fetch("https://localhost:3000/add-log", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message }),
    agent: httpsAgent,
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(error);
  }
  //If the request was successful, this line parses the JSON response body and returns it.
  return response.json();
};

//This line calls the addLogEntry function with a sample log message.
//If the addLogEntry function successfully completes, it logs the response to the console.
//If there is an error in the addLogEntry function, it catches the error and logs it to the console.
addLogEntry("This is a sample log message")
  .then(console.log)
  .catch(console.error);
