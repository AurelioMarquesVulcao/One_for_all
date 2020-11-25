const express = require("express");
const routes = express.Router();
const { CPU } = require("./lib/getCpu");
const {PostComandos} = require('./services/postComandos');

routes.get("/", function (req, res) {
  return res.send("Você esta no serviço One for All");
});
routes.post("/", function (req, res) {
  return res.send("Você esta no serviço One for All");
});

// routes.get("/monitoria01", Consulta7dias.getMonitoria01);

// routes.get("/fila", Fila.getFila);

// routes.get("/processos7dias", Consulta7dias.get7);

routes.post("/dockerUp", PostComandos.dockerUp);

routes.post("/pm2UpVariavel", PostComandos.startPm2Variaval);

routes.get("/cpu", CPU.cpuStatus);

// routes.post("/ligaDocker", (rec,res)=>{
//   console.log(rec.body);
//   return res.json({ "result":"deu bom" });
// });

// routes.post("/ligaDocker", Docker.API_UP);

// routes.post("/desligaDocker", Docker.API_STOP);





module.exports = routes;