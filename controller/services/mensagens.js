const axios = require("axios");
const { Email } = require("../lib/email");
const { SlackHandler } = require("../lib/slack");
const { Telegram } = require("../lib/telegram");

class Mensagens {
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
  static async slack(rec, res) {
    try {
      const { mensagem } = rec.body;
      let post = await new SlackHandler().post(`${mensagem}`);
      return res.json(post);
    } catch (e) {
      console.log(e);
    }
  }
  static async email(rec, res) {
    try {
      let date = new Date();
      const { mensagem, destinatario, assunto } = rec.body;
      let post = await Email.send(
        destinatario,
        assunto,
        `${mensagem} \l\nData: ${date.getFullYear()} / ${
          date.getMonth() + 1
        } / ${date.getDate()} - ${date.getHours()}:${date.getMinutes()}`
      );
      return res.json(post);
      // await Email.send("amarques@impacta.adv.br", "Envio de logs do sistema-01", `teste \n teste`);
    } catch (e) {
      console.log(e);
    }
  }
  static async telegram(rec, res) {
    try {
      let date = new Date();
      const { mensagem } = rec.body;
      let post = await Telegram.post(
        `${mensagem} \nData: ${date.getFullYear()} / ${
          date.getMonth() + 1
        } / ${date.getDate()} - ${date.getHours()}:${date.getMinutes()}`
      );
      return res.json(post);
    } catch (e) {
      console.log(e);
    }
  }
}
module.exports.Mensagens = Mensagens;
