function increment(selector){
  let container = $(selector);
  let fragment = document.createDocumentFragment();
  $(fragment)
    .append($('<textarea>')
      .attr('class', 'counter')
      .prop('value', '0')
      .attr('disabled', true))
    .append($('<button>Increment</button>')
      .attr('class', 'btn')
      .attr('id', 'incrementBtn'))
    .append($('<button>Add</button>')
      .attr('class', 'btn')
      .attr('id', 'addBtn'))
    .append($('<ul>')
      .attr('class', 'results'))
    .appendTo(container);

  let counter = 0;
  let textarea = $('.counter:eq(0)');
  let list = $('.results:eq(0)');

  $('#incrementBtn').on('click', function(){
    textarea.val(counter += 1);
  });

  $('#addBtn').on('click', function(){
    $('<li>').text(counter).appendTo(list);
    counter = 0;
    textarea.val(counter);
  });
}
