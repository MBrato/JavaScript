class Point{
  constructor(x, y){
      this.x = x;
      this.y = y;
  }
  get x(){
    return this._x;
  }
  set x(x){
    if(!Number(x)){
      throw new TypeError('x must be number!');
    }
    this._x = x;
  }
  get y(){
    return this._y;
  }
  set y(y){
    if(!Number(y)){
      throw new TypeError('y must be number!');
    }
    this._y = y;
  }
  static distance(a, b){
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.sqrt(dx ** 2 + dy ** 2);
  }
}

let pointA = new Point(1, 3);
let pointB = new Point(5, -1);
console.log(Point.distance(pointA, pointB));
//let pointOther = new Point('A', '0.5');
