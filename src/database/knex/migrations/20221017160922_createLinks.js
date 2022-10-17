exports.up = knex => knex.schema.createTable("links", table => {
  table.increments("id");
  // notNullable() -> não aceitar nullo
  table.text("url").notNullable();
  // a tag vai ter um id que faz referência ao id de uma nota da tabela notes
  table.integer("note_id").references("id").inTable("notes").onDelete("CASCADE"); // o CASCADE quer dizer que, se a nota for deletada, a tag é deletada junto. 
  table.timestamp("created_at").default(knex.fn.now());
});

exports.down = knex => knex.schema.dropTable("links");
