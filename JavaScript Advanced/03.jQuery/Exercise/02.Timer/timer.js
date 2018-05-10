function timer(){
  let hoursSpan = $('#hours');
  let minutesSpan = $('#minutes');
  let secondsSpan = $('#seconds');
  let startBtn = $('#start-timer');
  let pauseBtn = $('#stop-timer');
  let seconds = 0;
  let timer = null;

  startBtn.on('click', function(){
    timer = setInterval(step, 1000);
    startBtn.attr('disabled', true);
  });

  pauseBtn.on('click', function(){
    clearInterval(timer);
    startBtn.attr('disabled', false);
  });

  function step(){
    seconds += 1;
    outputTime(seconds);
  }

  function outputTime(value){
    hoursSpan.text(('0' + Math.floor(value / 3600)).slice(-2));
    minutesSpan.text(('0' + Math.floor(value / 60)).slice(-2));
    secondsSpan.text(('0' + value % 60).slice(-2));
  }
}
