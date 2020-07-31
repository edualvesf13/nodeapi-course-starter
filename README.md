# Criação de API Rest com NodeJS

> Criação: 27/07/2020 | Prática: @edualvesf13

## :pushpin: Table of Contents

* [Ferramentas](#rocket-ferramentas)
* [Instalando NodeJs](#dart-nodejs)
* [Criando estrutura](#dart-estrutura)
* [Criando o ServerJs](#dart-serverjs)
* [Criando a Primeira rota](#dart-rota)
* [Found a bug? Missing a specific feature?](#bug-issues)
* [Contributing](#tada-contributing)
* [License](#closed_book-license


### :rocket: Ferramentas
![MongoDB](https://github.com/edualvesf13/nodeapi-course-starter/blob/master/images/mongodb.png)
![Docker](https://github.com/edualvesf13/nodeapi-course-starter/blob/master/images/docker.png)
![Git](https://github.com/edualvesf13/nodeapi-course-starter/blob/master/images/git.png)
![Insomnia](https://github.com/edualvesf13/nodeapi-course-starter/blob/master/images/insomnia.png)
![NodeJs](https://github.com/edualvesf13/nodeapi-course-starter/blob/master/images/nodejs.png)
![Robo3T](https://github.com/edualvesf13/nodeapi-course-starter/blob/master/images/robo3t.png)


### :dart: Nodejs
Acesse o site [NodeJs.org](https://nodejs.org/en/) e faça o download correspondente ao seu S.O.
Insira os comandos abaixos no terminal para verificar a versão do NodeJs e NPM
`node --version`
`npm --version`


### :dart: Estrutura
* Iniciando o projeto gerando o package.json dentro do diretório principal
   * `npm init -y `
* Instalando o Express como dependência
   * `npm install express`
   > O Express é um microframework que ajuda a trabalhar com rotas
   
   
### :dart: ServerJs
* Arquivo: server.js
``` 
const express = require('express')
const app = express()
app.listen(3001) 
```
* Instalando o Nodemon como dependência de desenvolvimento
   * `npm install --save-dev nodemon`
   > É um módulo que irá monitorar todas as alterações nos arquivos da aplicação e reinicia automaticamente o servidor.

No arquivo package.json acrescente:
```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon server.js"
  },
```
* Execute o comando `npm run dev` para rodar o servidor

### :dart: Rota
No arquivo Server.js vamos utilizar o método .get() do express passando 2 parâmetros.
`app.get('/', (req, res) => {
  res.send('Mensagem de retorno')
} )`
