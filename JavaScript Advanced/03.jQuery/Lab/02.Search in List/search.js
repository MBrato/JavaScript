function search(){
  let patt = $('#searchText').val();
  if(patt){
    let matched = $(`ul#towns li:contains(${patt})`);
    matched.css('font-weight', 'bold');
    $(`ul#towns li:not(:contains(${patt}))`).css('font-weight', '');
    $('#result').text(matched.length + ' matches found.');
  } else {
    $('#result').text('No matches found.');
  }
}
