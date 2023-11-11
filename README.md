# Node.js server
Create a basic Node.js server using Express and Mongoose, with automatic server restart using nodemon.

## Getting Started

### 1. Set Up Your Project

Create a new directory for your project and navigate into it:

```bash
mkdir my-node-server
cd my-node-server
```

### 2. Initialize a Node.js Project
```bash
    npm init -y
```
### 3. Install Dependencies
```bash
    npm install express mongoose nodemon
```

- `express`: Web framework for Node.js.
- `mongoose`: MongoDB ODM (Object Data Modeling).
- `nodemon`: Utility to automatically restart the server during development.

## Project Structure

Create a new app and server file:
- `./App.js`
- `./Server.js`

## Run the Server

Add a script to your 'package.json' file for running the server with nodemon:

```json
    "scripts": {
        "start": "nodemon server.js"
    }
```
This allows you to start your server using npm start.

Run your server:
```bash
    npm start
```

Your server will be accessible at `http://localhost:<port>`