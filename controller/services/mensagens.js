const  axios  = require("axios");
const { Email } = require("../lib/email");
const { SlackHandler } = require("../lib/slack");

class Mensagens {
  static async slack() {
    await new SlackHandler().danger("te", "teste 01", "Vitor");
  }
  static async email() {
    // await Email.send("amarques@impacta.adv.br", "Envio de logs do sistema", "Envio teste 25 \l teste de linha \nteste de linha \nteste de linha");
    await Email.send("amarques@impacta.adv.br", "Envio de logs do sistema", `teste \n teste`);
  }
  static async telegram() {
    let token = "1616703540:AAGpZKaeiSudHKimeVnT-ShQFk1B0wSHPrU";
    let id = "-487339495";
    let data = {
      "chat_id" : id,
      text:"mensagem elaborada"
    }
    let teste = await axios({
      method: "POST",
      token:token,
      url: `https://api.telegram.org/bot${token}/sendMessage`,
      data: data
    }).catch(x=>console.log(x))
    console.log(teste.data);
  }

}

(async () => {
  // await Mensagens.slack();
  // await Mensagens.email();
  await Mensagens.telegram();
})();
