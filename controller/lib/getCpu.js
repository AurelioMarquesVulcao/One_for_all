const diskstats = require('diskstats');
const os = require('os');
const os1 = require('os-utils');
const { notificarSlack } = require('./postBrutoSlack');
var dados = {};


class CPU {
  static async cpuStatus(rec, res) {
    try {
      // let use = await new CPU().cpuUse()
      let memoriaFree = dados.memoriaFree;
      // const dados = {
      //   use: use,
      //   free: await new CPU().cpuFree(),
      //   memoriaFree: (os.freemem() / 1000000000).toFixed(2),
      //   memoriaTotal: (Math.trunc(os.totalmem() / 1000000000))
      // }
      console.log("Obtive os dados de CPU");
      return res.json(dados)
    } catch (e) {
      console.log(e);
      return res.json(e)
    }
  }

  async cpuUse() {
    return new Promise((resp) => {
      os1.cpuUsage(async (v) => resp(Math.trunc(v * 100)))
    })
  }
  async cpuFree() {
    return new Promise((resp) => {
      os1.cpuFree(async (v) => resp(Math.trunc(v * 100)))
    })
  }
  async hd() {
    let results = await diskstats.check('.');
    return Math.round((results.used / results.total)*100)

  }
}

module.exports.CPU = CPU;

(async () => {
  setInterval(async function () {
    dados = {
      use: await new CPU().cpuUse(),
      free: await new CPU().cpuFree(),
      memoriaFree: (os.freemem() / 1000000000).toFixed(2),
      memoriaTotal: (Math.trunc(os.totalmem() / 1000000000)),
      usoHd: await new CPU().hd()
    }
  }, 2000);
  setInterval(async function () {
    if (dados.memoriaFree < 5) {
      notificarSlack(
        `<@UREQDQ57T>
        <@U014LNLSMEE>
        <@UFYHXG5UM>
        A Restam ${memoriaFree}Gb de RAM no servidor 38 do Big Data. 
        `
      )
    }
    if (dados.usoHd < 20) {
      notificarSlack(
        `<@UREQDQ57T>
        <@U014LNLSMEE>
        <@UFYHXG5UM>
        A Restam ${dados.usoHd}Gb no Hd do servidor 38 do Big Data. 
        `
      )
    }
  }, 300000);
})()