const sleep = require('await-sleep');
const axios = require('axios');

// Criar metodo de post no Slack

// const axios = require("axios");

class SlackHandler {
  constructor() {
    this.colors = {
      success: "#28a745",
      danger: "#dc3545",
      info: "#0275d8",
      warning: "#ffc107",
    };

    this.username = "ImpactaBot!";
    

    this.webhookUrl =
      "https://hooks.slack.com/services/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";
  }

  // Essa função seria quando algo bom acontece, tipo esvaziar a fila
  async success(fila, message = "", responsavel = "") {
    const options = {
      username: this.username,
      text: message,
      attachments: [
        {
          color: this.colors.success,
          fields: [
            {
              title: "Robo",
              value: fila.robo,
              short: true,
            },
            {
              title: "Fila",
              value: fila.nome,
              short: false,
            },
            {
              title: "Estado",
              value: fila.estado,
              short: true,
            },
            {
              title: "Consumo",
              value: fila.estadoConsumo,
              short: true,
            },
          ],
        },
      ],
    };

    return axios.post(this.webhookUrl, options);
  }

  // Essa função para quando o robo para de funcionar por alguma razão
  async danger(fila, message = "", responsavel = "") {
    const options = {
      username: this.username,
      text: message,
      attachments: [
        {
          color: this.colors.danger,
          fields: [
            {
              title: "Robo",
              value: fila.robo,
              short: true,
            },
            {
              title: "Fila",
              value: fila.nome,
              short: false,
            },
            {
              title: "Estado",
              value: fila.estado,
              short: true,
            },
            {
              title: "Consumo",
              value: fila.estadoConsumo,
              short: true,
            },
            {
              title: "Mensagens",
              value: fila.mensagens,
              short: true,
            },
            {
              title: "Consumidores",
              value: fila.consumidores,
              short: true,
            },
          ],
        },
      ],
    };

    return axios.post(this.webhookUrl, options);
  }

  // Quando algo impactante acontece de forma negativa com a qual muda a velocidade de processamento
  // Queda de worker, ou tempo de duração maior que 1 mes exemplo
  async warning(fila, message = "", responsavel = "") {
    const options = {
      username: this.username,
      text: message,
      attachments: [
        {
          color: this.colors.warning,
          fields: [
            {
              title: "Robo",
              value: fila.robo,
              short: true,
            },
            {
              title: "Fila",
              value: fila.nome,
              short: false,
            },
            {
              title: "Estado",
              value: fila.estado,
              short: true,
            },
            {
              title: "Consumo",
              value: fila.estadoConsumo,
              short: true,
            },
            {
              title: "Mensagens",
              value: fila.mensagens,
              short: true,
            },
            {
              title: "Consumidores",
              value: fila.consumidores,
              short: true,
            },
            {
              title: "Taxa Consumo",
              value: fila.taxaConsumo,
              short: true,
            },
            {
              title: "Tempo Restante",
              value: fila.tempoRestante,
            },
          ],
        },
      ],
    };

    return axios.post(this.webhookUrl, options);
  }

  // Informar o inicio do monitoramento por exemplo
  async info(fila, responsavel = "") {
    const options = {
      channel: '#alertas-big-data',
      username: this.username,
      text: "EM CASO DE EXPLOSÂO CONTATAR RESPONSAVEL",
      attachments: [
        {
          color: this.colors.info,
          fields: [
            {
              title: "RESPONSAVEL",
              value: responsavel,
              short: false,
            },
            {
              title: "Robo",
              value: fila.robo,
              short: true,
            },
            {
              title: "Fila",
              value: fila.nome,
              short: true,
            },
            {
              title: "Estado",
              value: fila.estado,
              short: true,
            },
            {
              title: "Consumo",
              value: fila.estadoConsumo,
              short: true,
            },
            {
              title: "Mensagens",
              value: fila.mensagens,
              short: true,
            },
            {
              title: "Consumidores",
              value: fila.consumidores,
              short: true,
            },
            {
              title: "Taxa Consumo",
              value: fila.taxaConsumo,
              short: true,
            },
            {
              title: "Tempo Restante",
              value: fila.tempoRestante,
              short: true,
            },
          ],
        },
      ],
    };

    return axios.post(this.webhookUrl, options);
  }
}

module.exports.SlackHandler = SlackHandler;
