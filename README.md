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
