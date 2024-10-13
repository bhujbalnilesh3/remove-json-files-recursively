# File Deleter based on extension

This Node.js script recursively deletes all perticular types of files in a specified config from a directory. It also provides options for logging the names of the deleted files.

## Features

- Recursively searches for provided type files in a specified directory in config.json.
- Logs the names of deleted files to a log file.
- Simulates deletion without actually removing files (for testing purposes).

## Requirements

- Node.js 20.x
- A valid `config.json` file with appropriate settings.

## Installation

1. Clone this repository or download the script.
2. Ensure you have Node.js installed on your machine.
3. Create a `config.json` file in the same directory as the script. An example configuration is provided below.
4. Set simulate as true for first run
5. Run npm start

## Configuration

Your `config.json` should look like this:

```json
{
    "recursive": true,
    "fileType": "json",
    "absoulateFolderPathtoDelete": "D:/Google Takeout/",
    "writeFilenameLogs": true,
    "logFilePath": "D:/node-apps/remove-json-files-recursively/",
    "simulate": true
}
