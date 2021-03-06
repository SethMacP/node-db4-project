
exports.seed = async function(knex) {
  
  await knex('ingredient_names').insert([
    {name: "Butter"},
    {name: "Salt"},
    {name: "Vanilla"},
    {name: "Sugar"},
    {name: "Other Stuff"},

  ])
};
