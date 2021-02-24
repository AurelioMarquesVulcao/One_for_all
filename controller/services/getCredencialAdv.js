const { CredenciaisAdvogados } = require('../model/credenciaisAdvogados');

class CredencialAdvogado {
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

  static async modificando(rec, res) {
    try {
      // estou recebendo os parametros do mongoose na requisição
      // assim uma função pode fazer tudo.
      let { options, data, _id } = rec.body;
      if (options == 'findOne') {
        res.send(await CredenciaisAdvogados[options]({ _id: _id }));
      } else if (options == 'deleteOne') {
        res.send(await CredenciaisAdvogados[options]({ _id: _id }, data));
      } else if (options == 'updateOne') {
        res.send(await CredenciaisAdvogados[options]({ _id: _id }, data));
      } else if (options == 'save') {
        data['dataAtualização'] = new Date();
        data['dataCriacao'] = new Date();
        res.send(await CredenciaisAdvogados(data).salvar());
      }
    } catch (e) {
      if (e.code == 11000) {
        e["text"]="Duplicate key: Hash"
        res.send(e);
      } else {
        res.send(e);
      }
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

module.exports.CredencialAdvogado = CredencialAdvogado;


