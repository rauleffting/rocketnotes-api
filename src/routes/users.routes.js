// importando o Router do express:
const { Router } = require("express");

const UsersController = require("../controllers/UsersController")

const usersRoutes = Router();

function myMiddleware(request, response, next) {
  console.log("Você passou pelo Middleware!")

  if(!request.body.isAdmin) {
    return response.json({message: "user unauthorized"})
  }

  next();
}

const usersController = new UsersController()

// Posso usar o Middleware para todas as rotas também:
// usersRoutes.use(myMiddleware)
usersRoutes.post("/", myMiddleware, usersController.create)

// exportando o userRoutes:
module.exports = usersRoutes;