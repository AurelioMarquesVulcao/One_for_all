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
      if (memoriaFree < 5) {
        notificarSlack(
          `<@UREQDQ57T>
          <@U014LNLSMEE>
          <@UFYHXG5UM>
          A Memoria esta a ${memoriaFree}Gb, 
          `
        )
        // await Util.limpaMemoria();
      }


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
}

module.exports.CPU = CPU;

(async () => {
  setInterval(async function () {
    dados = {
      use: await new CPU().cpuUse(),
      free: await new CPU().cpuFree(),
      memoriaFree: (os.freemem() / 1000000000).toFixed(2),
      memoriaTotal: (Math.trunc(os.totalmem() / 1000000000))
    }
  }, 3000);

})()