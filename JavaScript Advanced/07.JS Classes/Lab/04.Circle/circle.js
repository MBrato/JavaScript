class Circle{
  constructor(radius){
    this.radius = radius;
  }
  get radius(){
    return this._radius;
  }
  set radius(radius){
    if(radius <= 0){
      throw new RangeError('Radius must be positive!');
    }
    this._radius = radius;
  }
  get diameter(){
    return 2 * this.radius;
  }
  set diameter(diameter){
    this.radius = diameter / 2;
  }
  get area(){
    return this.radius ** 2 * Math.PI;
  }
}

//let circle = new Circle(5);

//console.log(circle.diameter);
//console.log(circle.area);

//circle.diameter = 15;

//console.log(circle.radius);
//console.log(circle.diameter);

//circle.diameter = -2;

//let circle2 = new Circle(-5);
