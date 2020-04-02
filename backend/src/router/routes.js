const express = require("express");
const db = require("../database/db");
const routes = express.Router();

routes.get("/", function(req, res) {
  db.query("SELECT * FROM donors", function(err, result) {
    if (err) return res.send("Erro de banco de dados.");

    const donors = result.rows;
    return res.render("index.html", { donors });
  });
});

routes.post("/", function(req, res) {
  const name = req.body.name;
  const email = req.body.email;
  const blood = req.body.blood;

  if (name == "") {
    return res.send("Preencha o seu nome completo!");
  }

  if (email == "") {
    return res.send("Preencha o seu email!");
  }

  if (blood == "") {
    return res.send("Preencha o seu tipo sanguíneo!");
  }

  const query = `INSERT INTO donors ("name", "email", "blood")
    VALUES($1, $2, $3)`;

  const values = [name, email, blood];

  db.query(query, values, function(err) {
    if (err) return res.send("Erro no servidor.");

    return res.redirect("/");
  });
});

module.exports = routes;
