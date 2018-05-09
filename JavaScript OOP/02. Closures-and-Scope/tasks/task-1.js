/* Task Description */
/* 
	*	Create a module for working with books
		*	The module must provide the following functionalities:
			*	Add a new book to category
				*	Each book has unique title, author and ISBN
				*	It must return the newly created book with assigned ID
				*	If the category is missing, it must be automatically created
			*	List all books
				*	Books are sorted by ID
				*	This can be done by author, by category or all
			*	List all categories
				*	Categories are sorted by ID
		*	Each book/catagory has a unique identifier (ID) that is a number greater than or equal to 1
			*	When adding a book/category, the ID is generated automatically
		*	Add validation everywhere, where possible
			*	Book title and category name must be between 2 and 100 characters, including letters, digits and special characters ('!', ',', '.', etc)
			*	Author is any non-empty string
			*	Unique params are Book title and Book ISBN
			*	Book ISBN is an unique code that contains either 10 or 13 digits
			*	If something is not valid - throw Error
*/
function solve() {
	var library = (function() {
		var books = [];
		var categories = [];

		function listBooks(criteria) {
			var listBooks = [];

			if (!criteria) {
				listBooks = books;
			} else {
				if (criteria.author) {
					listBooks = books.filter((a) => a.author === criteria.author);
				}
				if (criteria.category) {
					listBooks = books.filter((a) => a.category === criteria.category);
				}
			}

			listBooks.sort((a, b) => a.ID - b.ID);

			return listBooks;
		}

		function addBook(book) {
			var validTitle = book.title.length >= 2 && book.title.length <= 100,
				validCategory = book.category.length >= 2 && book.category.length <= 100,
				title = book.title,
				author = book.author,
				isbn = book.isbn,
				category = book.category;

			book.ID = books.length + 1;

			if (books.some((x) => x.title === title)) {
				throw new Error('This books title already exists!');
			}
			if (books.some((x) => x.isbn === isbn)) {
				throw new Error('This ISBN already exists!');
			}
			if (!validTitle|| !validCategory) { 
				throw new Error('Title/category must be between 2-100 characters!');
			}
			if (author.length === 0) {
				throw new Error('Author is any non-empty string!');
			}
			if (!isFinite(isbn)) {
				throw new Error('ISBN must be composed only by numbers!');
			} else if (+isbn.length !== 10 && +isbn.length !== 13) {
				throw new Error('ISBN must be 10 or 13 characters!');
			}

			books.push(book);

			if(categories.every((x) => x.title !== category)){
				var category = {};
				category.title = book.category;
				category.ID = categories.length + 1;

				categories.push(category);
			}

			return book;
		}

		function listCategories() {
			var sortCategories = categories.sort(function(a, b){
				return a.ID - b.ID;
			}).map((x) => x.title);
			return sortCategories;
		}

		return {
			books: {
				list: listBooks,
				add: addBook
			},
			categories: {
				list: listCategories
			}
		};
	}());
	
	return library;
}

module.exports = solve;