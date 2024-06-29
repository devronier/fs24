const express = require("express");
const UserController = require("../controllers/userController");
const UserService = require("../services/userService");
const UserPrismaRepository = require("../repositories/userPrismaRepository");

const userRoutes = express.Router();
const userRepository = new UserPrismaRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);

userRoutes.get("/", userController.listAll);

userRoutes.get("/:id", userController.findById);

userRoutes.post("/", userController.create);

module.exports = userRoutes;
