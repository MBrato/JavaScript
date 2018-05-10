function solve(arrCommands){
  let inheritor = (function(){
    let objects = new Map();

    function create(name, param, parent){
      if(param){
        inherit(name, parent);
      } else {
        objects.set(name, {});
      }
    }
    function inherit(name, parent){
      objects.set(name, Object.create(objects.get(parent)));
    }
    function set(objName, propName, value){
      objects.get(objName)[propName] = value;
    }
    function print(name){
      let current = objects.get(name);
      let props = [];
      for(let prop in current){
        props.push(`${prop}:${current[prop]}`);
      }
      console.log(props.join(', '));
    }
    return {
      create,
      inherit,
      set,
      print
    }
  })();

  for(let command of arrCommands){
    let [cmd, name, param, value] = command.split(' ');
    inheritor[cmd](name, param, value);
  }
}
solve([
  'create c1',
  'create c2 inherit c1',
  'set c1 model bmv',
  'set c2 color red',
  'print c1',
  'print c2'
]);
