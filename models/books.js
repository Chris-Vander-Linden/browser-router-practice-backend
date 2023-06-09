'use strict';

const mongoose = require('mongoose');

// https://mongoosejs.com/docs/guide.html
const bookSchema = new mongoose.Schema({
  title: { type: String, require: true },
  author: { type: Array, require: true },
  image: { type: String, require: false },
  description: { type: String, require: true },
  status: { type: Boolean, require: true, default: false }
});

// Creates a Model this tells mongo DB what the name of the collection (book-collection) and schema (bookSchema) will be
// https://mongoosejs.com/docs/models.html
const BookModel = mongoose.model('books', bookSchema);

module.exports = BookModel;
