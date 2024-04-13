const express = require("express");
const { listUsers, createUser } = require("../controllers/UserController");

const userRoutes = express.Router();

userRoutes.get("/users", listUsers);
userRoutes.post("/users", createUser);

module.exports = userRoutes;
