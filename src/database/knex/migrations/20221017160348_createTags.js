exports.up = knex => knex.schema.createTable("tags", table => {
  table.increments("id");
  // notNullable() -> não aceitar nullo
  table.text("name").notNullable();
  // a tag vai ter um id que faz referência ao id de uma nota da tabela notes
  table.integer("note_id").references("id").inTable("notes").onDelete("CASCADE"); // o CASCADE quer dizer que, se a nota for deletada, a tag é deletada junto. 
  table.integer("user_id").references("id").inTable("users");
});

exports.down = knex => knex.schema.dropTable("tags");
