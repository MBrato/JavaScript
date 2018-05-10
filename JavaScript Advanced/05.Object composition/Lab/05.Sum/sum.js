function getModel(){
  let sel1, sel2, result;
  function init(selector1 , selector2, resultSelector){
    sel1 = $(selector1);
    sel2 = $(selector2);
    result = $(resultSelector);
  }
  function add(){
    result.val(Number(sel1.val()) + Number(sel2.val()));
  }
  function subtract(){
    result.val(Number(sel1.val()) - Number(sel2.val()));
  }
  return {
    init,
    add,
    subtract
  }
}
