const axios = require("axios");
const { Email } = require("../lib/email");
const { SlackHandler } = require("../lib/slack");
const { Telegram } = require("../lib/telegram");

class Mensagens {
  /**
   * Para ser utilizado no futuro. na criação de alertas personalizados das filas
   * @param {*} rec
   * @param {*} res
   */
  static async slackFila(rec, res) {
    await new SlackHandler().filas(
      {
        robo: "JTE",
        nome: "fila 01",
        estado: "Parado",
        estadoConsumo: 0,
      },
      "Verificador"
    );
  }

  /**
   * recebe mensagem a ser postada no slack
   * @param {json} rec mensagem
   * @param {json} res resposta da api do slack
   */
  static async slack(rec, res) {
    try {
      const { mensagem, chat } = rec.body;
      let post = await new SlackHandler().post(`${mensagem}`, chat);
      console.log(post.data);
      res = res.json(post.data);
      return res;
    } catch (e) {
      console.log(e);
    }
  }

  /**
   * recebe mensagem a ser postanda por email.
   * @param {json} rec mensagem
   * @param {json} res resposta padão de envio com sucesso do email.
   */
  static async email(rec, res) {
    try {
      // let date = new Date();
      const { mensagem, destinatario, assunto } = rec.body;
      let post = await Email.send(
        destinatario,
        assunto,
        `${mensagem}`

        // \l\nData: ${date.getFullYear()} / ${
        //   date.getMonth() + 1
        // } / ${date.getDate()} - ${date.getHours()}:${date.getMinutes()}
      );
      return res.json(post);
      // await Email.send("amarques@impacta.adv.br", "Envio de logs do sistema-01", `teste \n teste`);
    } catch (e) {
      console.log(e);
    }
  }

  /**
   * recebem mensagem a ser encaminhada por telegram
   * @param {json} rec mensagem
   * @param {json} res resposta padrão da api do telegram
   */
  static async telegram(rec, res) {
    try {
      const { mensagem, chat } = rec.body;
      let post = await Telegram.post(`${mensagem}`, chat);
      return res.json(post);
    } catch (e) {
      console.log(e);
    }
  }

  /**
   * recebe logs da api telegram. Para podermos obter o id do grupo que queremos que o robô envie mensagens.
   * @param {json} res Enfia os ultimos logs da api do telegram
   */
  static async telegramGrup(rec, res) {
    try {
      // const { mensagem, chat } = rec.body;
      let post = await Telegram.getGroup();
      return res.json(post);
    } catch (e) {
      console.log(e);
    }
  }
}
module.exports.Mensagens = Mensagens;
