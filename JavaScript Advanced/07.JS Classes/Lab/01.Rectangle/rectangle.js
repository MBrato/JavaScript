class Rectangle{
  constructor(width, height, color){
    this.width = width;
    this.height = height;
    this.color = color;
  }
  calclAria(){
    return this.width * this.height;
  }
}
let rect = new Rectangle(15, 12, 'red');
console.log(rect.calclAria());
