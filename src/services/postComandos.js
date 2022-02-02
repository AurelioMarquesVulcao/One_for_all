const { Util } = require('../lib/util');

class PostComandos {

  static async limpaMemoria(rec, res) {
    try {
      await Util.limpaMemoria();
      return res.json({ serviço: "ok" })
    } catch (e) {
      console.log(e);
      return res.json(e)
    }
  }

  static async desligaServer(rec, res) {
    try {
      res.json({ serviço: "Deligando o server" })
      
      return await Util.desligaServer();
    } catch (e) {
      console.log(e);
      return res.json(e)
    }
  }
 

}

module.exports.PostComandos = PostComandos;