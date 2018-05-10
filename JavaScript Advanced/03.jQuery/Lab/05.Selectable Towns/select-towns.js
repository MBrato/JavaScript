function attachEvents(){
  $('#items').on('click', 'li', function(){
    let currentLi = $(this);
    if(currentLi.attr('data-selected')){
      currentLi.removeAttr('data-selected');
      currentLi.css('background', '');
    } else {
      currentLi.attr('data-selected', 'true');
      currentLi.css('background', '#DDD');
    }
  });
  $('#showTownsButton').on('click', function(){
    let selectedLi = $('#items li[data-selected=true]');
    let towns = selectedLi.toArray().map(li => li.textContent).join(', ');
    $('#selectedTowns').text('Selected towns: ' + towns);
  });
}
