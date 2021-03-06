
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('steps').insert([
      {        step_number: 1,        instruction: "Add the ingredients.",        recipe_id: 1        },
      {        step_number: 2,        instruction: "Stir the ingredients.",        recipe_id: 1      },
      {        step_number: 3,        instruction: "Bake the ingredients.",        recipe_id: 1      },

      {        step_number: 1,        instruction: "Add the ingredients2.",        recipe_id: 2        },
      {        step_number: 2,        instruction: "Stir the ingredients2.",        recipe_id: 2      },
      {        step_number: 3,        instruction: "Bake the ingredients2.",        recipe_id: 3      },

      {        step_number: 1,        instruction: "Add the ingredients3.",        recipe_id: 3        },
      {        step_number: 2,        instruction: "Stir the ingredients3.",        recipe_id: 3      },
      {        step_number: 3,        instruction: "Bake the ingredients3.",        recipe_id: 3      },

      {        step_number: 1,        instruction: "Add the ingredients4.",        recipe_id: 4        },
      {        step_number: 2,        instruction: "Stir the ingredients4.",        recipe_id: 4      },
      {        step_number: 3,        instruction: "Bake the ingredients4.",        recipe_id: 4      },

      {        step_number: 1,        instruction: "Add the ingredients5.",        recipe_id: 5        },
      {        step_number: 2,        instruction: "ALL DONE - Eat the ingredients5.",        recipe_id: 5      },
      

  ])
};
