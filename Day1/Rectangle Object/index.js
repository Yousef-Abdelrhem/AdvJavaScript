

// - Rectangle Object
//     1.  Using Constructor method for creating Objects,
//      write a script that allows
//     you to create a rectangle object that : 
//     • Should have width and height properties.
//     • Implement two methods for calculating its area and perimeter.
//     • Implement `displayInfo()` function to display a message declaring the
//     width, height, area and perimeter of the created object.


function Rectangle(width, height) {
    this.width = width || 0;
    this.height = height || 0;
    
}

Rectangle.prototype.area = function() {
    return this.width * this.height;
}

Rectangle.prototype.perimeter = function() {
    return this.width * this.height;
}
Rectangle.prototype.displayInfo = function() {
    return this.width * this.height;
}

var obj = new Rectangle(2, 4);
console.log(obj.displayInfo()); /// there is undefined in the output