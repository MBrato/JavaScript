function solve(allCommands){
  let processor = (function() {
    let list = [];

    function add(str) {
      list.push(str);
    }

    function remove(str) {
      list = list.filter(e => e !== str);
    }

    function print() {
      console.log(list.join(', '));
    }
    return { add, remove, print }
  })();

  for(let command of allCommands){
    let commandTokens = command.split(' ');
    processor[commandTokens[0]](commandTokens[1]);
  }
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);
