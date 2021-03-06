// Update with your config settings.
module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true, // needed for sqlite
    connection: {
      filename: './Data/recipeBook.db3'
    },
    migrations: {
      directory: "./Data/migrations"
    },
    seeds: {
      directory: "./Data/seeds"
    }
  },
};
