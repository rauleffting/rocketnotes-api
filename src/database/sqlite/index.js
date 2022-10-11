const sqlite3 = require("sqlite3") // driver
const sqlite = require("sqlite") 
const path = require("path") // resolve os caminhos de diretório em sis. op. diferentes

async function sqliteConnection(){
  const database = await sqlite.open({
    filename: path.resolve(__dirname, "..", "database.db"),
    driver: sqlite3.Database
  })

  return database;
}

module.exports = sqliteConnection