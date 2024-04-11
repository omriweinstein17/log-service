//Includes the fetch function to make HTTP requests.
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
const https = require("https");

// Create an https agent that ignores unauthorized certificates
const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});
// Defines an async function to search log entries using a keyword.
const searchLogEntries = async (keyword) => {
  const url = `https://localhost:3000/search-logs?keyword=${encodeURIComponent(
    keyword
  )}`;
  //Makes a GET request to the search endpoint.
  const response = await fetch(url, {
    method: "GET",
    agent: httpsAgent,
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(error);
  }

  return response.json();
};

//This line calls the searchLogEntries function with a sample log message.
//If the searchLogEntries function successfully completes, it logs the response to the console.
//If there is an error in the searchLogEntries function, it catches the error and logs it to the console.
searchLogEntries("sample") // Use a keyword for the search
  .then(console.log)
  .catch(console.error);
