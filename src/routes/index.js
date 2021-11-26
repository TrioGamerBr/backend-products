const produtoController = require("../controllers/produtoController");

const routes = require("express").Router();

routes.post("/produto", produtoController.createProduto);

module.exports = routes;