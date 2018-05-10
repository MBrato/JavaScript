function initializeTable(){
  $('#createLink').click(addCountry);

  createCountry('Bulgaria', 'Sofia');
  createCountry('Germany', 'Berlin');
  createCountry('Russia', 'Moscow');
  adjustLinks();


  function addCountry(){
    let name = $('#newCountryText').val();
    let capital = $('#newCapitalText').val();
    createCountry(name, capital);
    adjustLinks();
    $('#newCountryText').val('');
    $('#newCapitalText').val('');
  }

  function createCountry(name, capital){
    $('<tr>')
      .append($(`<td>${name}</td>`))
      .append($(`<td>${capital}</td>`))
      .append($('<td>')
        .append($('<a href="#">[Up]</a>').click(moveUp))
        .append($('<a href="#">[Down]</a>').click(moveDown))
        .append($('<a href="#">[Delete]</a>').click(deleteCountry)))
      .css('display', 'none')
      .appendTo($('#countriesTable'))
      .fadeIn();
  }

  function adjustLinks(){
    $('tr a').show();
    $('tr:last-child a:contains(Down)').hide();
    $('tr:eq(2) a:contains(Up)').hide();
  }

  function moveUp(){
    let currentRow = $(this).parent().parent();
    currentRow.fadeOut(() => {
        currentRow.insertBefore(currentRow.prev()).fadeIn();
        adjustLinks();
      });
  }
  function moveDown(){
    let currentRow = $(this).parent().parent();
    currentRow.fadeOut(() => {
        currentRow.insertAfter(currentRow.next()).fadeIn();
        adjustLinks();
      });
  }
  function deleteCountry(){
    let currentRow = $(this).parent().parent();
      currentRow.fadeOut(() => {
        currentRow.remove();
        adjustLinks();
      });
  }
}
