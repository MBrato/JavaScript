 function assembleCar(car){
   let modifyCar = {};
   let engine = {};
   let wheels = [];

   if(car.power <= 90){
     engine.power = 90;
     engine.volume = 1800;
   } else if(car.power <= 120){
     engine.power = 120;
     engine.volume = 2400;
   } else if(car.power <= 200){
     engine.power = 200;
     engine.volume = 3500;
   }

   if(car.wheelsize % 2 === 0){
     car.wheelsize--;
   }
   for(let i = 0; i < 4; i += 1){
     wheels.push(car.wheelsize);
   }

   modifyCar.model =  car.model;
   modifyCar.engine = engine;
   modifyCar.carriage = {
     type: car.carriage,
     color: car.color
   }
   modifyCar.wheels = wheels;

   return modifyCar
 }

 console.log(assembleCar({
   model: 'Opel Vectra',
   power: 110,
   color: 'grey',
   carriage: 'coupe',
   wheelsize: 17
 }));
