require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connect__DB = require('./database/database');
const user__ROUTE = require('./users/users.route');

const port = process.env.PORT || 3001;
const app = express();

connect__DB();

app.use(cors());
app.use(express.json());

app.use('/users', user__ROUTE)

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
