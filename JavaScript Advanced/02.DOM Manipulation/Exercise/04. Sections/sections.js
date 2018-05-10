function create(sentences){
  let content = document.getElementById('content');

  for(let sent of sentences){
    let div = document.createElement('div');
    let p = document.createElement('p');
    p.textContent = sent;
    p.style.display = 'none';
    div.appendChild(p);
    div.addEventListener('click', function(){
      p.style.display = 'inline-block';
    });
    content.appendChild(div);
  }
}
