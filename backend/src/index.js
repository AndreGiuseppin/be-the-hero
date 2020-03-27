const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * npx knex migrate:make 'nome da table' <= cria o arquivo onde iremos inserir o nome da table e suas colunas
 * npx knex migrate:latest <= para rodar o script de create table e ser criada
 * npx knex migrate:rollback <= rollback do ultimo migrate
 */

/**
 * node index.js
 * npm install express
 * npm install nodemon -D
 * npm start
 */

/**
 * localhost:3333/users <= ROTA
 * /users <= RECURSO
 */

/**
 * Métodos HTTP
 * GET: Acessa uma rota, Buscar/listas informação no back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar informação no back-end
 * DELETE: Deletar informação no back-end
 */

/**
 * Tipos de Parametros
 * Query Params: parametros nomeados enviados na rota apos "?" (Filtros, Paginações)
 * Route Params: Parametros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */




app.listen(3333); //porta do localhost