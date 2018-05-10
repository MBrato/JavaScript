function attachEventsListeners(){
  let buttons = document.querySelectorAll('div > input[type="button"]');
  let rates = {
    'days': 1,
    'hours': 24,
    'minutes': 1440,
    'seconds': 86400
  }
  let inputBtn = {
    'daysBtn': 'days',
    'hoursBtn': 'hours',
    'minutesBtn': 'minutes',
    'secondsBtn': 'seconds'
  }

    for(let btn of buttons){
      btn.addEventListener('click', convert);
  }

  function convert(){
    let type = this.getAttribute('id');
    let kindInput = inputBtn[type];
    let value = Number(document.getElementById(kindInput).value);
    let results = {
      'days': value * (rates.days / rates[kindInput]),
      'hours': value * (rates.hours / rates[kindInput]),
      'minutes': value * (rates.minutes / rates[kindInput]),
      'seconds': value * (rates.seconds / rates[kindInput])
    }
    document.getElementById('days').value = results.days;
    document.getElementById('hours').value = results.hours;
    document.getElementById('minutes').value = results.minutes;
    document.getElementById('seconds').value = results.seconds;
  }
}
