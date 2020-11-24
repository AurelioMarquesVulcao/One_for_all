const {Util} = require('../lib/util');

class PostComandos{
  static async dockerUp(rec, res) {
    try {
      await Util.dockerUp(rec.body.servico);
      return res.json({serviço:"ok"})
    } catch (e) {
      console.log(e);
      return res.json(e)
    }

  }

}

module.exports.PostComandos = PostComandos;