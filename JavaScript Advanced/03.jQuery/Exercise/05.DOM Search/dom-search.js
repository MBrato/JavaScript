function domSearch(selector, isCaseSensitive){
  let divSelector = $(selector);
  let fragment = document.createDocumentFragment();
  let enteredValue = $('<input>').attr('id', 'add');
  let addBtn = $('<a>Add</a>').addClass('button')
      .attr('href', '#')
      .css('display', 'inline-block')
      .on('click', function() {
        addListItem(enteredValue.val());
        enteredValue.val('');
      });
  let searchInput = $('<input>')
        .attr('id', 'search')
        .on('input', function() {
          let searchValue = $(this).val()
          let elements = $('.items-list strong').toArray();

          for (let el of elements) {
            let current = $(el);
            if (isCaseSensitive) {
              if (current.text().indexOf(searchValue) < 0) {
                current.parent().css('display', 'none');
              } else {
                current.parent().css('display', '');
              }
            } else {
              if (current.text().toLowerCase().indexOf(searchValue.toLowerCase()) < 0) {
                current.parent().css('display', 'none');
              } else {
                current.parent().css('display', '');
              }
            }
          }
        });
  let addControls = $('<div>').addClass('add-controls')
    .append($('<label>Enter text: </label>').attr('for', 'add'))
    .append(enteredValue)
    .append(addBtn)
    .appendTo(fragment);
  let searchControls = $('<div>').addClass('search-controls')
    .append($('<label>Search: </label>').attr('for', 'search'))
    .append(searchInput)
    .appendTo(fragment);
  let resultControls = $('<div>').addClass('result-controls')
    .append($('<ul>').addClass('items-list'))
    .appendTo(fragment);

  function addListItem(value){
    let deleteBtn = $('<a>X</a>').addClass('button').attr('href', '#');
    let newLi = $('<li>').addClass('list-item')
      .append(`<strong>${value}</strong>`)
      .prepend(deleteBtn);
    newLi.appendTo($('.items-list'));
    deleteBtn.on('click', () => {
      deleteBtn.parent().remove();
    });
  }

  divSelector.append(fragment);

}
