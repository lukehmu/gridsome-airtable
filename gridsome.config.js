// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome Airtable',
  plugins: [
    {
      use: '@gridsome/source-airtable',
      options: {
        apiKey: process.env.API_KEY, // required
        baseId: process.env.BASE_ID, // required
        tableName: 'Furniture', // required
        typeName: 'Product', // required
      },
    },
  ],
  templates: {
    Product: '/product/:id',
  },
}
