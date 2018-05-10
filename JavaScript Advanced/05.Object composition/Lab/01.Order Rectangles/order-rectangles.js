function createRectangle(width, height){
  return {
    width: width,
    height: height,
    area: () => this.width * this.height,
    compareTo: function(other){
      let result = other.area - this.area;
      return result || (other.width - this.width);
    },
    toString: function(){
      return `rect[${this.width} x ${this.height}]`;
    }
  };
}

let rectungle1 = createRectangle(7, 5);
let rectungle2 = createRectangle(20, 16);
let rectangleEqual = createRectangle(5, 7);
let rectArray = [rectungle1, rectungle2, rectangleEqual];

console.log(rectArray.map(el => el.toString()));
rectArray.sort((a, b) => a.compareTo(b));
console.log(rectArray.map(el => el.toString()));
