// importar o express:
const express = require("express")
// inicializar o express:
const app = express()
// Que porta o express deve ficar observando:
const PORT = 33333
// A arrow function do listen é para dizer
// o que ele deve executar quando abrir a porta
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`))