let inputCountdown = document.querySelector('#inputCountdown');
let playBtn = document.querySelector('#playBtn');
let pauseBtn = document.querySelector('#pauseBtn');
let stopBtn = document.querySelector('#stopBtn');
let remainingTime = document.querySelector('#remainingTime');


let interval;
let counter;
let remainingSecond = 0;

playBtn.addEventListener('click', ()=>{
        
        clearInterval(interval);
        // counter = inputCountdown.value;
       
// if (remainingSecond != 0){}
        if (remainingSecond > 0) {
            counter = remainingSecond
        }else {
        counter = parseInt(inputCountdown.value) || 0;
    }
    
        interval = setInterval(() => {
            if(counter < 0){
                clearInterval(interval);
                remainingSecond = 0;
                remainingTime.innerHTML = '--';
    
            }else{
                
                remainingTime.innerHTML = counter;
                counter--
            }
            
        }, 1000);
    
});

pauseBtn.addEventListener('click', ()=>{
    clearInterval(interval);
    remainingSecond = counter;
})

stopBtn.addEventListener('click', ()=>{
   
    clearInterval(interval);
    inputCountdown.value = '';
    remainingTime.innerHTML = '--';
    remainingSecond = 0;
})




