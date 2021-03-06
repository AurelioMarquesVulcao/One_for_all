const { AplicacaoVar } = require("../model/variaveis");

class VariaveisAmbiente {
  /**
   * Obtem as variáveis de ambiente
   * @param {Object} res Vaiaveis
   */
  static async variaveis(rec, res) {
    // console.log(rec.body);
    let find = await VariaveisAmbiente.getVarivel(rec.body);
    // console.log(find);
    try {
      return res.send(find);
    } catch (e) {
      console.log(e);
      return res.json(e);
    }
  }

  /**
   * Modifica as Variaveis de ambiente
   * @param {*} rec
   * @param {*} res
   */
  static async modificando(rec, res) {
    // estou recebendo os parametros do mongoose na requisição
    // assim uma função pode fazer tudo.
    let { options, data, _id } = rec.body;
    if (options == "findOne") {
      res.send(await AplicacaoVar[options]({ _id: _id }));
    } else if (options == "deleteOne") {
      console.log(_id);
      res.send(await AplicacaoVar[options]({ _id: _id }, data));
    } else if (options == "updateOne") {
      res.send(await AplicacaoVar[options]({ _id: _id }, data));
    } else if (options == "save") {
      let codeNumber = (await AplicacaoVar.find({}).sort({ codigo: -1 }).limit(1))[0].codigo + 1;
      data["codigo"] = codeNumber;
      data["dataAtualização"] = new Date();
      data["dataCriacao"] = new Date();
      res.send(await AplicacaoVar(data).save());
    }
  }

  static async getVarivel(find) {
    try {
      return await AplicacaoVar.find(find).sort({ _id: -1 });
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports.VariaveisAmbiente = VariaveisAmbiente;
