class CountDown{

  createADiv() {
    const div = document.createElement('div')
    const randNum = Math.floor(Math.random() * 10)
    div.className = `countDown-${randNum}`
  
    //div.innerHTML = "hELLO WORLD"
    
    document.getElementById('display').appendChild(div)
    return div.className
  }
  
  countdown(minutes, seconds){
    const element = this.createADiv()

    const el = document.querySelector(`.${element}`)
    var interval = setInterval(function() {
      if(seconds == 0) {
          if(minutes == 0) {
              console.log("STOP!");     
              clearInterval(interval);
              return;
          } else {
              minutes--;
              seconds = 60;
          }
      }

      if(minutes > 0) {
          var minute_text = minutes + (minutes > 1 ? ' minutes' : ' minute');
      } else {
        var minute_text = '';
      }

      let second_text = seconds > 1 ? '' : '';
      console.log(minute_text + ' ' + seconds + ' ' + second_text + '');
      el.innerHTML = minute_text + ' ' + seconds + ' ' + second_text + '' 
      seconds--;
     
  }, 1000);
  }
}


const countDown = new CountDown()

countDown.countdown(0, 10)
countDown.countdown(1, 10)
countDown.countdown(0, 30)
countDown.countdown(1, 0)
