const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const start_btn = document.getElementById("start");
const reset_btn = document.getElementById("reset");
let timeoutid;
let sec = 0;
let min = 0;
let hour = 0;

start_btn.addEventListener("click",()=>{
    timeoutid = setInterval(()=>{
        sec++;
        if(sec == 60){
            sec = 0;
            min = min+1;
            if(min<10){
                minutes.innerText = `0${min}`;
            }
            else{
                minutes.innerText = `${min}`;
            }
           
        }
        if(sec<10){
            sec = `0${sec}`
        }
        seconds.innerText = sec;
        if(min==60){
            min = 0;
            hour = hour+1;
            if(hour<10){
                hours.innerText = `0${hour}`;
            }
            else{
                hours.innerText = `${hour}`;
            }
        }
    
    },1000);
})

reset_btn.addEventListener('click',()=>{
    clearInterval(timeoutid);
    hours.innerText = "00";
    minutes.innerText = "00";
    seconds.innerText = "00";
})