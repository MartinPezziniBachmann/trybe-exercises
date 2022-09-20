const BookService = require('./book.service');

const getAll = async (req, res) => {
  const { author } = req.query
  let books;
  if (author) {
    books = await BookService.getByAuthor();
  } else {
    books = await BookService.getAll();
  }
  return res.status(200).json(books);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const book = await BookService.getById(id);
  if (!book) return res.status(404).json({ message: 'Book not found' });
  return res.status(200).json(book);
}

const create = async (req, res) => {
  const { title, author, pageQuantity, publisher } = req.body;
  const book = await BookService.create({ title, author, pageQuantity, publisher });

  res.status(201).json(book);
};

const update = async (req, res) => {
  const { id } = req.params;
  const { title, author, pageQuantity, publisher } = req.body;
  
  const updated = await BookService.update(id, { title, author, pageQuantity, publisher });

  if (!updated) return res.status(404).json({ message: 'Book not found' });

  res.status(200).json({ message: 'Book updated' });
};

const remove = async (req, res) => {
  const { id } = req.params;
  const book = await BookService.remove(id);
  return res.status(200).json({ message: 'Book removed!'});
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
}
