const knex = require("../database/knex")

class NotesController {
  async create(request, response) {
    const { title, description, tags, links } = request.body;
    const { user_id } = request.params;
    
    const note_id = await knex("notes").insert({
      title,
      description,
      user_id
    });

    const linksInsert = links.map(link => {
      return {
        note_id,
        url: link
      }
    });

    await knex("links").insert(linksInsert);

    const tagsInsert = tags.map(name => {
      return {
        note_id,
        name,
        user_id
      }
    });

    await knex("tags").insert(tagsInsert);

    response.json();
  }

  async show(request, response) {
    const { id } = request.params;

    const note = await knex("notes").where({ id }).first();
    const tags = await knex("tags").where({ note_id: id}).orderBy("name");
    const links = await knex("links"). where({ note_id: id }).orderBy("created_at")

    return response.json({
      ...note,
      tags,
      links
    });
  }

  async delete(request, response) {
    const { id } = request.params;

    await knex("notes").where({ id }).delete();

    return response.json();
  }

  async index(request, response) {
    const { title, user_id, tags } = request.query;

    let notes;

    if(tags) {
      // split(',') -> separa por vírgula
      // trim() -> coloca as tags em um vetor
      const filterTags = tags.split(',').map(tag => tag.trim());
      // console.log(filterTags)

      notes = await knex("tags")
      .whereIn("name", filterTags) // retorna as notes que têm algumas das tags no name

    } else {
      notes = await knex("notes")
      .where({ user_id })
      .whereLike("title", `%${title}%`) // para encontrar pelo título ou trechos deste
      .orderBy("title");
    }

    return response.json(notes);
  }
}

module.exports = NotesController;