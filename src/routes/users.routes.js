// importando o Router do express:
const { Router } = require("express");

const UsersController = require("../controllers/UsersController")

const usersRoutes = Router();

const usersController = new UsersController()

// Posso usar o Middleware para todas as rotas também:
// usersRoutes.use(myMiddleware)
usersRoutes.post("/", usersController.create)

// exportando o userRoutes:
module.exports = usersRoutes;