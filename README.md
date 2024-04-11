# Log Service Documentation

## Project Overview

Log Service is a RESTful API service designed to handle log entries and provide search functionality based on specific keywords.

## Features

- Add log entries to the database via API endpoint.
- Search for log entries based on specific keywords and return top results.

## Prerequisites

- Node.js and npm installed
- Docker installed (for Docker deployment)

## Installation

- Download the project files:

- You should have received a ZIP file containing the project files, including the Dockerfile and README.md.

- Extract the ZIP file:

- Extract the contents of the ZIP file to a location on your computer.
  Open a terminal or command prompt:

- Navigate to the directory where you extracted the project files.
  Build the Docker image using the Dockerfile:
  docker build -t log-service .

## Running the Service

-Once the Docker image is built, you can run the Docker container using the following command:
docker run -p 3000:3000 log-service
The Log Service will now be running securely on https://localhost:3000.

## API Specification

### Add Log Entry Endpoint

- **Endpoint**: `POST /add-log`
- **Body**:
  ```json
  {
    "message": "string"
  }
  ```
- **Description**: Adds a log entry with the provided message to the database.
- **Responses**:
- 201 Created: Log entry added successfully.
- 400 Bad Request: No log message provided in the request.
- 500 Internal Server Error: Server error when adding log entry.

### Search Logs Endpoint

- **Endpoint**: `GET /search-logs`
- **Query Parameters**: `keyword=string`
- **Description**: Searches for log entries containing the specified keyword and returns the top 10 matches.
- **Responses**:
- 200 OK: Successfully retrieved log entries.
- 400 Bad Request: No keyword provided for the search.
- 500 Internal Server Error: Server error during the search process.

## Security

This service uses HTTPS to encrypt the communication between the client and the server. SSL/TLS certificates (found in `key.pem` and `cert.pem`) are used to establish a secure connection. Make sure these files are present in the root directory of the project and are correctly referenced in the server setup.

## Sample Tools

### Adding a Log Entry

The `addLogEntry.js` script demonstrates how to programmatically add a new log entry to the database. To run this script, navigate to the project directory in your terminal and execute the following command:

```bash
node addLogEntry.js

```

### Searching Log Entries

The searchLogEntries.js script shows how to programmatically search the log entries using a specific keyword. To run this script, navigate to the project directory in your terminal and execute the following command:

```bash
node searchLogEntries.js
```

This will search for log entries containing the keyword "sample"
and display the top 10 matches.
