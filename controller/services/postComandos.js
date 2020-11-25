const { Util } = require('../lib/util');

class PostComandos {
  static async dockerUp(rec, res) {
    try {
      await Util.dockerUp(rec.body.servico);
      return res.json({ serviço: "ok" })
    } catch (e) {
      console.log(e);
      return res.json(e)
    }

  }

  static async startPm2Variaval(rec, res) {
    try {
      const { servico, nome, variavel } = rec.body
      await Util.startEVariavelPM2(servico, nome, variavel);
      return res.json({ serviço: "ok" })
    } catch (e) {
      console.log(e);
      return res.json(e)
    }

  }

}

module.exports.PostComandos = PostComandos;