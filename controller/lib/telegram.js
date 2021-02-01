const axios = require("axios");
const { Email } = require("../lib/email");
const { SlackHandler } = require("../lib/slack");

class Telegram {
  /**
   * Envia mensagem ao Grupo
   * @param {string} mensagem Texto que se deseja enviar ao chatbot
   */
  static async post(mensagem) {
    let token = "1616703540:AAGpZKaeiSudHKimeVnT-ShQFk1B0wSHPrU";
    let id = "-487339495";
    let data = {
      chat_id: id,
      text: mensagem,
    };
    let teste = await axios({
      method: "POST",
      token: token,
      url: `https://api.telegram.org/bot${token}/sendMessage`,
      data: data,
    }).catch((x) => console.log(x));
    console.log(teste.data);
  }

  static async get() {
    let token = "1616703540:AAGpZKaeiSudHKimeVnT-ShQFk1B0wSHPrU";
    let id = "-487339495";
    let data = {
      chat_id: id,
      // text: mensagem,
    };
    let teste = await axios({
      method: "GET",
      token: token,
      url: `https://api.telegram.org/bot${token}/getMessage`,
      data: data,
    }).catch((x) => console.log(x));
    console.log(teste.data.result);
  }
}
module.exports.Telegram = Telegram;


// (async () => {
//   // await Mensagens.slack();
//   // await Mensagens.email();
//   // await Mensagens.telegram();
//   await Telegram.get()
// })();