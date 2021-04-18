const fs = require('fs');
const axios = require('axios');
const { Client } = require('@elastic/elasticsearch');
const client = new Client({ node: 'http://localhost:9200' })

const main = async () => {

  const file = fs.readFileSync('books.json');
  const data = JSON.parse(file);

  const start = async () => {
    await data.forEach(async book => {
      const { id, ...data } = book;

      await client.index({
        index: 'books',
        body: {
          ...data
        }
      })
    })
  }
  start();
};

main();