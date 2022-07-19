require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connect__DB = require('./database/database');
const user__ROUTE = require('./users/users.routes');
const auth__ROUTE = require("./auth/auth.routes");
const character__ROUTE = require("./characters/characters.routes");
const swagger__ROUTE = require('./swagger/swagger.routes');

const port = process.env.PORT || 3001;
const app = express();

connect__DB();

app.use(cors());
app.use(express.json());

app.use('/users', user__ROUTE)
app.use("/auth", auth__ROUTE);
app.use("/characters", character__ROUTE);
app.use('/api-docs', swagger__ROUTE);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
