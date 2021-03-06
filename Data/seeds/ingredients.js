
exports.seed = async function(knex) {
  await knex('ingredients').insert([
    {
      ingredient_names_id: 1,
      quantity: 2,
      quantity_mod: "sticks",
      recipe_id: 1
    },
    {
      ingredient_names_id: 2,
      quantity: 4,
      quantity_mod: "tsp",
      recipe_id: 1
    },
    {
      ingredient_names_id: 3,
      quantity: 1,
      quantity_mod: "tsp",
      recipe_id: 1
    },
    {
      ingredient_names_id: 4,
      quantity: 1,
      quantity_mod: "cup",
      recipe_id: 2
    },
  ])
};
