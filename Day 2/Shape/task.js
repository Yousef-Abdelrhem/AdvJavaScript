// function Rectangle(width, height) {

//     this.width = width;
//     this.height = height;
// }

// Rectangle.prototype.CalcArea = function()
// {
//     return this.width * this.height;
// }

// Rectangle.prototype.perimeter = function(){
//     return 2 * (this.height + this.width);
// }
// Rectangle.prototype.toString = function(){
//     console.log("Area:", this.CalcArea());
//     console.log("Perimeter:", this.perimeter());
// }

// b. Create Class Property that counts numbers of created objects and Class
// method to retrieve it.
// Rectangle.prototype.count = function(){
//     var counter = 0;
//     for(key in this){
//         counter++;
//     }
//     return counter;
// }

// var obj = new  Rectangle(3, 4);

// obj.toString();

// Make proper updates in your previous code of generating
//  Rectangle object that
// should inherit from Shape Constructor,
// and create your Square constructor that
// inherits from Rectangle.

function Shape() {
    // Bouns
  if (new.target === Shape)
    throw new Error("Cannot Create New Instance from of Shape ");
}
Shape.prototype.CalcArea = function () {
  return this.width * this.height;
};
Shape.prototype.perimeter = function () {
  return 2 * (this.height + this.width);
};
Shape.prototype.toString = function () {
  console.log("Area:", this.CalcArea());
  console.log("Perimeter:", this.perimeter());
};
function extend(child, parent) {
  child.prototype = Object.create(parent.prototype);
  child.prototype.constructor = child;
}

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  Rectangle.counter++;
}
Rectangle.counter = 0;

extend(Rectangle, Shape);

// Rectangle.prototype = Object.create(Shape.prototype);
// Rectangle.prototype.constructor = Rectangle;

function square(width) {
  this.width = width;
  Rectangle.call(this, width, width);
  square.counter++;
}
square.counter = 0;
extend(square, Shape);

// square.prototype = Object.create(Rectangle.prototype);
// square.prototype.constructor = square;

var rec = new Rectangle(3, 4);
var sq = new square(4);
rec.toString();
sq.toString();

console.log('SquareCounter :', square.counter);
console.log('RectangleCounter :', square.counter);
