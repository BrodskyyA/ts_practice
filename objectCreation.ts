import Book from "./Book";
import ElectronicBook from "./ElectronicBook";

// Створення об'єктів класу Book та ElectronicBook
const physicalBook = new Book("Harry Potter", "J.K. Rowling", 1997);
const electronicBook = new ElectronicBook("The Lord of the Rings", "J.R.R. Tolkien", 1954, "EPUB");

// Виклик методів getSummary
console.log(physicalBook.getSummary());
console.log(electronicBook.getSummary());