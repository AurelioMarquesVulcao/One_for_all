// const Crypto = require('crypto-js');
const shell = require('shelljs');
const sleep = require('await-sleep');

class Util {
    // static timerNow() {
    //     let data = new Date();
    //     let Semana = ["domingo", "segunda", "terca", "quarta", "quinta", "sexta", "sabado"];
    //     // Guarda cada pedaço em uma variável
    //     let dia = data.getDate();           // 1-31
    //     let dia_sem = data.getDay();        // 0-6 (zero=domingo)
    //     let mes = data.getMonth();          // 0-11 (zero=janeiro)
    //     let ano2 = data.getYear();           // 2 dígitos
    //     let ano4 = data.getFullYear();       // 4 dígitos
    //     let hora = data.getHours();          // 0-23
    //     let min = data.getMinutes();        // 0-59
    //     let seg = data.getSeconds();        // 0-59
    //     let mseg = data.getMilliseconds();   // 0-999
    //     let tz = data.getTimezoneOffset(); // em minutos
    //     let semana = Semana[dia_sem];
    //     return { dia, mes, hora, min, seg, semana }
    // }
    static limpaMemoria() {
        shell.exec(`sudo sync && sudo sysctl vm.drop_caches=3`)
    }

    static desligaServer() {
      shell.exec(`sudo shutdown -h now`)
  }

    static async PM2(comando) {
        shell.exec(`pm2 ${comando}`)
    }

    // /**
    //  * exemplo : pm2 start app/workers/JTE_DOC/Worker/extracao_JTE_5doc.js --name doc13 -- 13
    //  * @param {*} servico 
    //  * @param {*} nome 
    //  * @param {*} variavel 
    //  */
    // static async Pm2Variaval(servico, nome, variavel) {
    //     shell.exec(`pm2 start ${servico} --name ${nome} -- ${variavel}`)
    // }
    // static async stopPM2All(time = 0) {
    //     await sleep(time)
    //     shell.exec("pm2 restart all")
    // }
    // static dockerUp(servico) {
    //     shell.exec(`docker-compose up -d ${servico}`)
    // }
    // static dockerUpBuild(servico) {
    //     shell.exec(`docker-compose up -d --build ${servico}`)
    // }
    // static dockerUpAll() {
    //     shell.exec('docker-compose up -d')
    // }
    // static dockerStop(serviço) {
    //     shell.exec(`docker-compose stop ${serviço}`)
    // }
    // static dockerStopAll() {
    //     shell.exec('docker-compose stop')
    // }
    // static dockerDownAll() {
    //     shell.exec('docker-compose down')
    // }
    // static entraContainer(servico) {
    //     // shell.exec(`docker-compose exec ${servico} --i pm2 scale worker-03 3`)
    //     // shell.exec(`docker-compose exec ${servico} bash`,{ silent: true })
    // }
    // static escaleContainer(servico, quantidade) {
    //     shell.exec(`docker-compose scale ${servico}=${quantidade}`)
    // }
    static comand(servico) {
        shell.exec(`${servico}`)
    }

}

module.exports.Util = Util;


class Helper {
  /**
   * Converte data comum para formato Date. sem alterar o fuso horário
   * @param {string} data Data comum. Ex.: 25/02/2020 09:40
   * @returns {string} 2020-01-01T10:10.000Z
   */
  static data(data) {
    // O GMT-0000 mantem a hora que você inseriu sem alterar fuso -3
    // se quiser inserir fuso, ex.: horario de brazilia -3GMT.
    //GMT-0300
    let regex = data.replace(
      /([0-9]{1,2})\W([0-9]{1,2})\W([0-9]{4})\s([0-9]{2}\W[0-9]{2})/i,
      '$3-$2-$1 $4 GMT-0000'
    );
    return new Date(regex);
  }

  /**
   * pega uma data e subtrai "x" dias dela
   * @param {data} data1 colocar new Date()
   * @param {number} dias numero de dias a subtrair
   */
  static subtraiData(data1, dias) {
    let d = data1;
    let novo = new Date(d.setDate(d.getDate() - dias));
    // Helper.data(`${novo.getDate()}/${novo.getMonth()+1}/${novo.getFullYear()} 00:00`)
    // console.log(novo.getDate(),novo.getMonth()+1, novo.getFullYear());
    return Helper.data(
      `${novo.getDate()}/${novo.getMonth() + 1}/${novo.getFullYear()} 00:00`
    );
  }

  /**
   * pega uma data e adiciona "x" dias dela
   * @param {data} data1 colocar new Date()
   * @param {number} dias numero de dias a subtrair
   */
  static somaData(data1, dias) {
    let d = data1;
    let novo = new Date(d.setDate(d.getDate() + dias));
    // Helper.data(`${novo.getDate()}/${novo.getMonth()+1}/${novo.getFullYear()} 00:00`)
    // console.log(novo.getDate(),novo.getMonth()+1, novo.getFullYear());
    return Helper.data(
      `${novo.getDate()}/${novo.getMonth() + 1}/${novo.getFullYear()} 00:00`
    );
  }

  static removerEspacosEmBranco(texto) {
    return texto.replace(/\n+|\s+|\t+/g, ' ').trim();
  }

  static removerEspeciais(texto) {
    return texto
      .replace(/\n+|\t+/g, ' ')
      .replace(/\:+/, '')
      .replace(/\s+/g, '_')
      .replace(/\(+|\)+/g, '')
      .trim();
  }

  static removerAcento(texto) {
    return texto
      // .toLowerCase()
      .replace(/[ÁÀÂÃÄ]/g, 'A')
      .replace(/[ÉÈÊË]/g, 'E')
      .replace(/[ÍÌÎÏ]/g, 'I')
      .replace(/[ÓÒÔÕÖ]/g, 'O')
      .replace(/[ÚÙÛÜ]/g, 'U')
      .replace(/[Ç]/g, 'C')

      .replace(/[ÁÀÂÃÄ]/gi, 'a')
      .replace(/[ÉÈÊË]/gi, 'e')
      .replace(/[ÍÌÎÏ]/gi, 'i')
      .replace(/[ÓÒÔÕÖ]/gi, 'o')
      .replace(/[ÚÙÛÜ]/gi, 'u')
      .replace(/[Ç]/gi, 'c')
  }

    /**
   * Gera um hash em sha1 para o parametro fornecido
   * @param {string} texto Texto para gerar o hash
   */
  static hash(texto) {
    const cifra = Crypto.SHA1(texto);
    return cifra.toString();
  }
}

module.exports.Helper = Helper;