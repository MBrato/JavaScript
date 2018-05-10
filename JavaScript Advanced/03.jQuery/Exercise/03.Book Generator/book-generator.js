function createBook(selector, bookTitle, authorName, isbn){
    let bookGenerator = (function bookGenerator(){
        let id = 1;
        return function(selector, bookTitle, authorName, isbn){
          let container = $(selector);
          let bookContainer = $('<div>');
          let selectBtn = $('<button>Select</button>');
          let deselectBtn = $('<button>Deselect</button>');

          bookContainer.attr('id', `book${id}`);
          bookContainer.css('border', 'none');
          $(`<p class="title">${bookTitle}</p>`)
            .appendTo(bookContainer);
          $(`<p class="author">${authorName}</p>`)
            .appendTo(bookContainer);
          $(`<p class="isbn">${isbn}</p>`)
            .appendTo(bookContainer);
          selectBtn.on('click', function(){ bookContainer.css('border', '2px solid blue');
          });
          deselectBtn.on('click', function() { bookContainer.css('border', 'none');
          });
          selectBtn.appendTo(bookContainer);
          deselectBtn.appendTo(bookContainer);
          bookContainer.appendTo(container);
          id += 1;
        }
      }());

    bookGenerator(selector, bookTitle, authorName, isbn);
    bookGenerator(selector, bookTitle, authorName, isbn);
    bookGenerator(selector, bookTitle, authorName, isbn);
}
