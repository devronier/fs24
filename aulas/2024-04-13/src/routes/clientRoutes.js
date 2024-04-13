const express = require("express");
const { listClient, createClient } = require("../controllers/ClientController");

const clientRoutes = express.Router();

clientRoutes.get("/client", listClient);
clientRoutes.post("/client", createClient);

module.exports = clientRoutes;
