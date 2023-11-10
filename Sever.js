const http = require("http");
const app = require("./App");

// const port = <port number> //local
const port = process.env.port||2999;//not local
//example port

const server = http.createServer(app);

module.exports = server;

app.listen(port);