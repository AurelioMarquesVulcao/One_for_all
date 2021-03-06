const express = require("express");
const routes = express.Router();

const { CPU } = require("./lib/getCpu");
const { CredencialAdvogado } = require("./services/getCredencialAdv");
const { GetPm2 } = require("./services/getPM2");
const { PostComandos } = require("./services/postComandos");
const { Mensagens } = require("./services/mensagens");
const { VariaveisAmbiente } = require("./services/getVariavel");

routes.get("/", function (req, res) {
  return res.send("Você esta no serviço One for All");
});
routes.post("/", function (req, res) {
  return res.send("Você esta no serviço One for All");
});

routes.post("/limpaMemoria", PostComandos.limpaMemoria);

routes.post("/Pm2Variaval", PostComandos.Pm2Variaval);

routes.post("/PM2", PostComandos.PM2);

routes.post("/dockerUp", PostComandos.dockerUp);

routes.post("/dockerStop", PostComandos.dockerStop);

routes.post("/dockerStopAll", PostComandos.dockerStopAll);

routes.post("/escaleContainer", PostComandos.escaleContainer);

routes.post("/dockerUpBuild", PostComandos.dockerUpBuild);

routes.post("/comands", PostComandos.comands);

routes.post("/slack", Mensagens.slack);

routes.post("/email", Mensagens.email);

routes.post("/telegram", Mensagens.telegram);

routes.post("/credencialAdvogado/modificando", CredencialAdvogado.modificando);

routes.post("/variaveisAmbiente/m", VariaveisAmbiente.modificando);

// routes.post("/escaleContainer", Mensagens.escaleContainer);

routes.get("/cpu", CPU.cpuStatus);

routes.get("/pm2List", GetPm2.get);

routes.get("/limpaMemoria", PostComandos.limpaMemoria);

routes.get("/telegram/chat", Mensagens.telegramGrup);

routes.get("/credencialAdvogado", CredencialAdvogado.variaveis);

routes.get("/variaveisAmbiente", VariaveisAmbiente.variaveis);

module.exports = routes;
