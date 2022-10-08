// importar o express:
const express = require("express")
// inicializar o express:
const app = express()
// Que porta o express deve ficar observando:

// implementar o método GET

// por Route Params
app.get("/message/:id/:user", (request, response) => {
  //request.params.id e request.params.user
  const { id, user } = request.params;

  response.send(`
  Message ID: ${id}.
  User: ${user}
  `)
  // ex: http://localhost:3333/message/23/raul
}) 

 

const PORT = 3333
// A arrow function do listen é para dizer
// o que ele deve executar quando abrir a porta
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`))