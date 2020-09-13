"use strict";

//задание 1
//классы печатных изданий
class PrintEditionItem {

    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
   }

   fix() {
        return (this.state *= 1.5);
       }
        set state(state) {
             if (state < 0) {
             return (this._state = 0);

             } else if (state > 100) {
             return (this._state = 100);

             } else {
             return (this._state = state);
             }
        }
    
   get state() {
        return this._state;
   }
}

//журналы
class Magazine extends PrintEditionItem {
    constructor(...args) {
        super(...args);
        this.type = "magazine"
    }
}

//книги
class Book extends PrintEditionItem {
    type = 'book';

    constructor (author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
    }
}

//романы
class NovelBook extends Book {
    constructor(...args) {
        super(...args);
        this.type = "novel";
    }
}

//фантастика
class FantasticBook extends Book {
    constructor(...args) {
        super(...args);
        this.type = "fantastic";
    }
}

//детективы
class DetectiveBook extends Book {
    constructor(...args) {
        super(...args);
        this.type = "detective";
    }
}

//задание 2
class Library {
    constructor(name) {
         this.name = name;
         this.books = []; 
    }


    addBook(book) {
         if (book.state > 30)

         return this.books.push(book);
    }

    findBookBy(type, value) {
         for (let key in this.books) {
             if (this.books[key][type] == value)
             return this.books[key];
         }

         return null;
    }


    giveBookByName(bookName) {
         for (let key in this.books) {
              if (this.books[key].name == bookName) 
              return this.books.splice(key, 1)[0];
         }

         return null;
    }
};

//задание 3
//со звёздочкой