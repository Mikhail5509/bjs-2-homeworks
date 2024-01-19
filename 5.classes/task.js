class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}

	fix() {
		this.state = this.state * 1.5;
	}

	set state(state) {
		if (state < 0) {
			this.state = 0;
		} else if (state > 100) {
			this.state = 100;
		} else {
			this.state = state;
		}
	}

	get state() {
		return this.state;
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = "book";
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "novel";
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "fantastic";
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "detective";
	}
}

class Library {
	constructor(name, books) {
		this.name = "name";
		this.books = [];
	}


	addBook(book) {
		if (book.state > 30) {
			this.books.push(Book);
		}
	}

	findBookBy(type, value) {
		return this.books.find(book => book[type] === value);
	}

	giveBookByName(bookName) {
		let foundBook = this.findBookBy("name", bookName);
		if (!foundBook) {
			return null;
		}

		this.books.splice(this.books.indexOf(foundBook), 1);
		return foundBook;
	}
}