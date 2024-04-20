const { Router } = require("express");
const UserController = require("../controllers/UserController");
const UserRepository = require("../repositories/UserRepository");
const UserService = require("../services/userService");

const userRoutes = Router();

const userRepository = new UserRepository()
const userService = new UserService(userRepository)
const userController = new UserController(userService)

userRoutes.get("", (req, res) => userController.findAll(req, res))
userRoutes.get("/:id", (req, res) => userController.findById(req, res))

userRoutes.post("", (req, res) => userController.create(req, res))

module.exports = userRoutes;
