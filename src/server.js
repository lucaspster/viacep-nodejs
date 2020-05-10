const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

//Middlewares
const logs = function (req, res, next) {
  // Não quero que faça nada mesmo.
  next();
};

app.use(logs);
//Cors
app.use(cors());
//rotas
app.use(routes);
app.listen(3333);
