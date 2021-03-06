
exports.seed = async function(knex) {
	await knex('recipes').insert([
		{recipe_name: "Banana Bread"},
		{recipe_name: "Apple Pie"},
		{recipe_name: "Green Eggs & Ham"},
		{recipe_name: "Cheesy Chicken Rice"},
		{recipe_name: "Meatloaf"},
	])
};
