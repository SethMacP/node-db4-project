
exports.up =  async function(knex) {
  //Create the tables that are not dependent on others first. 
  await knex.schema.createTable("recipes" , (table)=>{
      table.increments("id")
      table.text("recipe_name").notNull().unique()
  })
  await knex.schema.createTable("steps", (table)=>{
    table.increments("id")
    table.integer("step_number").notNull()
    table.text("instruction").notNull()
    table.integer('recipe_id').notNull()
    .references('id')
    .inTable('recipes')
    // .onDelete("SET NULL")
  })
  await knex.schema.createTable('ingredient_names' , (table)=>{
    table.increments("id")
    table.text("name").notNull().unique()
  })
  //ZOO_ANIMALS *WINK*
  await knex.schema.createTable('ingredients' , (table)=>{
  //This refers to the name of the ingredient
  // table.integer(['recipe_id','ingredient_names_id']).notNull().unique()
    table.integer('ingredient_names_id')
      .notNull()
      .unique()
      .references('id')
      .inTable('ingredient_names')
  //this refers to the recipe
    table.integer('recipe_id')
    .notNull()
    .references('id')
    .inTable('recipes')
  //pk for the table is recipe_id/ingredient_name_id
    table.primary(['recipe_id','ingredient_names_id'])
    table.real('quantity').notNull()
    table.text('quantity_mod').notNull()
  })

};

exports.down = async  function(knex) {
  //Remove in the opposite order you built them.
  //You don't start from the bottom when tearing down a house.
  await knex.schema.dropTableIfExists('ingredients')
  await knex.schema.dropTableIfExists('ingredient_names')
  await knex.schema.dropTableIfExists('steps')
  await knex.schema.dropTableIfExists("recipes")
};
