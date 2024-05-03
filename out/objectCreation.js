"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Book_1 = require("./Book");
var ElectronicBook_1 = require("./ElectronicBook");
// Створення об'єктів класу Book та ElectronicBook
var physicalBook = new Book_1.default("Harry Potter", "J.K. Rowling", 1997);
var electronicBook = new ElectronicBook_1.default("The Lord of the Rings", "J.R.R. Tolkien", 1954, "EPUB");
// Виклик методів getSummary
console.log(physicalBook.getSummary());
console.log(electronicBook.getSummary());
