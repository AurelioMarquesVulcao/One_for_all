const express = require("express");
const routes = express.Router();

const { PostComandos } = require("./services/postComandos");

routes.get("/", function (req, res) {
  return res.send("Você esta no serviço One for All");
});
routes.post("/", function (req, res) {
  return res.send("Você esta no serviço One for All");
});

routes.get("/limpaMemoria", PostComandos.limpaMemoria);

routes.get("/desliga", PostComandos.desligaServer);


module.exports = routes;
