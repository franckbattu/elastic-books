const fs = require('fs');
const axios = require('axios');
const { Client } = require('@elastic/elasticsearch');
const client = new Client({ node: 'http://localhost:9200' })

const main = async () => {

  const file = fs.readFileSync('books.json');
  const data = JSON.parse(file);

  const start = async () => {
    await data.forEach(async book => {
      await client.index({
        index: 'books',
        body: {
          title: book.title,
          authors: book.authors,
          books_count: book.books_count,
          image: book.image,
          image_medium: book.image_medium,
          average_rating: book.average_rating,
          average_rating_rounded: book.average_rating_rounded,
          isbn: book.isbn,
          language_code: book.language_code,
          original_publication_year: book.original_publication_year,
          original_series: book.original_series,
          original_title: book.original_title,
          ratings_count: book.ratings_count,
        }
      })
    })
  }
  start();
};

main();