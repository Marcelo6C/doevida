const express = require("express");
const nunjucks = require("nunjucks");
const routes = require("./router/routes");

const server = express();

server.use(express.static("./frontend/src/public"));

server.use(express.urlencoded({ extended: true }));

nunjucks.configure("./frontend/src", {
  express: server,
  noCache: true
});

server.use(routes);

server.listen(3333, function() {
  console.log("Iniciei o servidor com nodemon");
});
