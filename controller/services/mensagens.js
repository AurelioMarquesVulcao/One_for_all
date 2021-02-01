const  axios  = require("axios");
const { Email } = require("../lib/email");
const { SlackHandler } = require("../lib/slack");
const {Telegram} = require('../lib/telegram');

class Mensagens {
  static async slack() {
    await new SlackHandler().danger("te", "teste 01", "Vitor");
  }
  static async email() {
    // await Email.send("amarques@impacta.adv.br", "Envio de logs do sistema", "Envio teste 25 \l teste de linha \nteste de linha \nteste de linha");
    await Email.send("amarques@impacta.adv.br", "Envio de logs do sistema", `teste \n teste`);
  }
  static async telegram() {
    await Telegram.post("Teste.")
  }

}

(async () => {
  // await Mensagens.slack();
  // await Mensagens.email();
  await Mensagens.telegram();
})();
