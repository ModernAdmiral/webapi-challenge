const express = require("express");
const projectRouter = require("../data/helpers/projectRouter");
const actionsRouter = require("../data/helpers/actionsRouter");
const server = express();

server.use("/api/projects", projectRouter);
server.use("/api/actions", actionsRouter);

server.use(express.json());

server.get("/", (req, res) => {
  res.send(`<h2>Let's do the sprint now</h2>`);
});

module.exports = server;
