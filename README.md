# One For All

## Ligando PM2:

* rode a aplicação apartir da pasta raiz da sua aplicação

* pegue o caminho relativo do seu arquivo: EX.: "app/worker/helloWorld.js"
* envie no corpo da requisição para pm2 com variaveis:
  
``` 
{"servico" : "app/worker/helloWorld.js",
 "nome" : "hello",
 "variavel" : "TestandoEnvio2" }
 ```
 

 * envie no corpo da requisição para pm2

``` 
{"comando" : "stop hello"}
 ```
<hr>

 ``` 
{"comando" : "start app/worker/helloWorld.js"}
 ```

## Rota Principal
http://172.16.16.38:3338


post - /limpaMemoria

post - /dockerStopAll

post - /Pm2Variaval

{"servico":"app/workers/JTE_DOC/Worker/extracao_JTE_5doc.js",
 "nome":"doc02",
 "variavel":"02"}

post - /PM2

{ "comando": "start app/serve.js" }

post - /dockerUp

{ "servico": "work-jte-01" }

post - /dockerStop

{ "servico": "work-jte-01" }

post - /escaleContainer

{"servico":"worker-trt-02","quantidade":"8"}

post - /dockerUpBuild

/dockerUpBuild

{ "servico": "work-jte-01" }


ex.: http://172.16.16.38:3338/dockerStop