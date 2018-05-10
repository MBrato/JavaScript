function getExtensibleObject(){
  let obj = {
    extend: function(temp){
      for(var key in temp){
        if(temp.hasOwnProperty(key)){
          var el = temp[key];
          if(typeof el === 'function'){
            Object.getPrototypeOf(obj)[key] = el;
            //obj.__proto__[key] = el;
          } else {
            obj[key] = el;
          }
        }
      }
    }
  };

  return obj;
}

let newObj = getExtensibleObject();
let template = {
  extensionMethod: function () {
    console.log('Sofia');
  },
  extensionProperty: 'Plovdiv'
};

newObj.extend(template);
console.log(newObj);
console.log(Object.getPrototypeOf(newObj));
