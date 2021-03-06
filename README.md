# [ONLINE] Hands on de TDD com Node.js Mocha & Chai by Glaucia Lemos

Repositório responsável pelo código desenvolvido durante o Hands on sobre TDD com Node.Js Mocha & Chai pelo canal [**Developers BR**](https://www.youtube.com/channel/UCGhSrtP0-1qq0XPbnMpi2kQ)
Durante o Hands on estarei ensinando a criar uma  api que realize as 4 operações do HTTP: GET, DELETE, PUT & POST. Utilizando das boas práticas de programação e realizando o TDD.

## Recursos Utilizados no Desenvolvimento: :rocket: :rocket:

- Node.Js;
- Express.Js
- MongoDb & MLab;
- Code Metrics; (análise de desenvolvimento do codigo)
- Visual Studio Code;
- Json data (para retornar os dados);
- PostMan (testar a API criada);
- TDD (Mocha & Chai);

## O que Preciso Saber para prosseguir no Hands on?! :fire: :fire:

* **Ter noções de JavaScript:**
    - Desvendando a linguagem JavaScript (Rodrigo Branas): [AQUI](https://www.youtube.com/playlist?list=PLQCmSnNFVYnT1-oeDOSBnt164802rkegc)


* **Ter noções de Node.js:**
    - Tutorial: CRUD API RESTful com: Node + Express + MongoDb (Glaucia Lemos): [AQUI](https://www.youtube.com/playlist?list=PLb2HQ45KP0WstF2TXsreWRv-WUr5tqzy1)

    - Curso: Criando APIs com NodeJs (Baltaio): [AQUI](https://www.youtube.com/playlist?list=PLHlHvK2lnJndvvycjBqQAbgEDqXxKLoqn)

## Testando a Aplicação no Postman: :rocket: :rocket:

Caso queira testar as API's criadas no projeto, primeiro baixe o [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop).
Depois de realizar o download do Postman, basta agora realizar os passos abaiaxo para 
poder testar cada API criada!

## Executar Localmente

Caso você deseja executar o projeto na sua máquina local, basta seguir os passos abaixo:

## Começando...

Para começar, você deve simplesmente clonar o repositório do projeto na sua máquina e instalar as dependências.

### Pre-Requisitos

Antes de instalar as dependências no projeto, você precisa já ter instalado na sua máquina:

* **Node.Js**: Caso não tenha, basta realizar o download [Aqui](https://nodejs.org/en/)
* **MongoDb**: Caso também não tenha, basta realizar o download [Aqui](https://www.mongodb.com/download-center#community)

p.s.: o MongoDb caso você decida conectar a sua base de dados de maneira local. Caso não, basta usar 
a base de dados do MongoDb em Cloud:

* [MLab](https://mlab.com/)

**p.s.: por padrão já estou deixando a conexão de dados do Cloud: MLab, para facilitar todos vocês. Mas, caso queiram testar via MongoDb, bastam baixar e descomentar a connection criada nos arquivos contidos na pasta: 'config'.**

### Instalando as Dependências (via Windows):

Abre o cmd (caso esteja utilizando o Windows) e digite a path do seu projeto

```
cd "C:\Users\NomeDoComputador\Documents\..."
```

Depois, quando estiver na pasta do projeto, basta digitar no cmd a seguinte instrução: **(dentro do src)**

```
npm install
```

Ao digitar a instrução acima, automaticamente ele irá baixar todas as dependências listadas e definidas no arquivo package.json:

* `node_modules` - que contêm os packages do npm que precisará para o projeto.

## Instalação dos Programas via Linux:

Estarei disponibilizando os links onde explicam como baixar:

- Node.Js: [AQUI](https://nodejs.org/en/download/package-manager/)
- MongoDb: [AQUI](https://docs.mongodb.com/v3.0/administration/install-on-linux/)

## Padrão das Rotas Criadas: 

Procurando seguir o padrão e design das API's, segue abaixo as URI's das rotas a serem desenvolvidas:

obs.: api de exemplo através do site: https://jsonplaceholder.typicode.com

 ROTA                      |     HTTP(Verbo)   |      Descrição                |      Links (via PostMan)                 
-------------------------  | ----------------- | ---------------------         | ---------------------------------------- 
/posts                     |       GET         | Selecionar Todos os Posts     | GET:    http://localhost:8000/posts      
/post                      |       POST        | Criar um Post                 | POST:   http://localhost:8000/post
/post/:post_id             |       GET         | Selecionar Por Id             | GET:    http://localhost:8000/post/:id
/post/:post_id/            |       PUT         | Atualizar Por Id              | PUT:    http://localhost:8000/post/:id   
/post/:post_id/            |       DELETE      | Excluir Por Id                | DELETE: http://localhost:8000/post/:id

### Executando a Aplicação

Bom, agora na mesma tela do cmd, basta iniciar o server para o projeto ser executado localmente.

```
node server.js
```

Depois, você precisará abrir um outro terminal na sua máquina e iniciar o MongoDb. Basta digitar na tela do cmd o seguinte comando:

```
mongod
```

Caso o MongoDb esteja devidamente instalado em sua máquina, ele iniciará o serviço mostrando que a port 27017 foi iniciada.


Agora, abre a página da aplicação em `http://localhost:3000/api`. E pronto a aplicação será executada de maneira local na sua máquina.        


p.s.: no projeto, disponibilizei 2 maneiras de realizar a conexão de dados com o MongoDb através do Mongoose:

* **De maneira local**: utilizando o MongoDb;
* **De maneira em cloud**: utilizando o MLab;

## Executando os Testes:

Basta executar o comando: **(dentro da pasta src)**

```
> npm test

```


