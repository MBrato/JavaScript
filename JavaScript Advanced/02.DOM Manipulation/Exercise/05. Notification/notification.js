function notify(message) {
  let divNotification = document.getElementById('notification');

  divNotification.textContent = message;
  divNotification.style.display = 'block';
  window.setTimeout(hideMassage, 2000);

  function hideMassage(){
    divNotification.style.display = 'none';
   }
}
