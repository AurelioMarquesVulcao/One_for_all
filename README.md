# One For All

## Ligando PM2:

- rode a aplicação apartir da pasta raiz da sua aplicação

- pegue o caminho relativo do seu arquivo: EX.: "app/worker/helloWorld.js"
- envie no corpo da requisição para pm2 com variaveis:

```js
{"comando" : "start app/worker/helloWorld.js"}
```

<hr>
<br>

## Request Padrão

```js
const axios = require("axios");
axios({
  url: "http://172.16.16.38:3338/<xxx>",
  method: "post",
  data: data,
})
  .then((resp) => {
    console.log(resp);
  })
  .cath((resp) => {
    console.log(resp);
  });
```

```py
import requests
url = "http://172.16.16.38:3338/<xxx>"
payload='{"mensagem":"Teste python Postman 3", "chat":"-589780645"}'
headers = {
  'Content-Type': 'application/json'
}
response = requests.request("POST", url, headers=headers, data=payload)
print(response.text)
```

<br>
<hr>
## Rotas Principais

### **base url : http://172.16.16.38:3338**

<br>

- post - /limpaMemoria --> limpa o uso de memória em cash

- post - /dockerStopAll --> USE APENAS EM CASO DE INCÊNDIO, Para todos os containers

- post - /Pm2Variaval --> Roda comandos no pm2

```js
{"servico":"app/workers/JTE_DOC/Worker/extracao_JTE_5doc.js",
 "nome":"doc02",
 "variavel":"02"}
```

- post - /PM2

```js
{ "comando": "start app/serve.js" }
```

- post - /dockerUp

```js
{ "servico": "work-jte-01" }
```

- post - /dockerStop

```js
{ "servico": "work-jte-01" }
```

- post - /escaleContainer

```js
{"servico":"worker-trt-02","quantidade":"8"}
```

<!-- * post - /dockerUpBuild

* /dockerUpBuild
```
{ "servico": "work-jte-01" }
``` -->
<hr>

## Mensageiros

### **base url : http://172.16.16.38:3338**
### **bot Telegram : @ImpactaBr_bot**

- get - /telegram/chat --> Obtem o ultimo log do bot, use esse get após adicionar o bot ao seu chat.

```js
resposta:
  {
    "update_id": 260186693,
    "message": {
        "message_id": 42,
        "from": {
            "id": 610732305,
            "is_bot": false,
            "first_name": "Aurelio",
            "username": "Aurelio_Vulcao",
            "language_code": "pt-br"
        },
        "chat": {
            "id": -589780645,
            "title": "SandBox",
            "type": "group",
            "all_members_are_administrators": true
        },
    }
}
```

Assim você obtem o numero do chat para ser incluido na mensagem -->
**"chat": { "id": -589780645}**

- post - /telegram

```js
{"mensagem":"Teste Postman", "chat":"-589780645"}
```

Para enviar direto ao chat de alertas

```js
{"mensagem":"Teste Postman"}
```

- post - /slack --> Por padrão as mensagens serão enviadas ao grupo #alertas-big-data

```js
{"mensagem":"Teste Postman"}
```

- post - /email --> envia email

```js
{"destinatario":"amarques@impacta.adv.br", "assunto":"Envio de logs do sistema", "mensagem":"Teste Postman"}
```
