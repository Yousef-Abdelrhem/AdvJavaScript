function Box(height, width, length, numbOfBooks, material, type) {
  this.height = height;
  this.width = width;
  this.length = length;
  this.numbOfBooks = numbOfBooks;
  this.volume = height * width * length;
  this.material = material;
  this.type = type;
  this.content = [];
}

function Book(
  name,
  type,
  numOfChapters,
  author,
  numPages,
  publisher,
  numOfCopies
) {
  this.name = name;
  this.type = type;
  this.numOfChapters = numOfChapters;
  this.author = author;
  this.numPages = numPages;
  this.publisher = publisher;
  this.numOfCopies = numOfCopies;

  Book.counter++;
}

Book.counter = 0;

Box.prototype.addBook = function (Book) {
  this.content.push(Book);
};
Box.prototype.deleteBook = function (name) {
  var arr = [];
  for (var i = 0; i < this.content.length; i++) {
    if (this.content[i].name !== name) arr.push(this.content[i]);
  }

  this.content = arr;
};

Box.prototype.toString = function()
{
  console.log(
    "width: ",
   this.width,
    " height: ",
    this.height,
    "BooksNumber: ",
    this.content.length
  );
}

Box.prototype.valueOf = function(){
    return this.content.length;
}

var box1 = new Box(10, 15, 20, 0, "wood", "storage");
var box2 = new Box(10, 15, 20, 0, "wood", "storage");

var book1 = new Book("joe", "1", 22, "jeo", 2, "joe", 2);
var book2 = new Book("joe2", "2", 22, "jeo", 2, "joe", 2);

var book3 = new Book("joe", "1", 22, "jeo", 2, "joe", 2);
var book4 = new Book("joe2", "2", 22, "jeo", 2, "joe", 2);

box1.addBook(book1);
box2.addBook(book2);
box1.addBook(book4);
box2.addBook(book3);

box1.toString();

console.log(box1 + box2);


