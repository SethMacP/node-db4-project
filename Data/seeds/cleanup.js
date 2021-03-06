
exports.seed =  async function(knex) {
	await knex('steps').truncate();
	await knex('recipes').truncate();
};
