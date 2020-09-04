    const Sec = document.querySelector('.sec-hand');
    const Min = document.querySelector('.min-hand');
    const Hour = document.querySelector('.hour-hand');

let secondsDeg;
let minuteDeg;
let hourDeg;
function setTimer() {
    const now = new Date();
    const seconds = now.getSeconds();
    if(!secondsDeg) {
        secondsDeg = seconds * 6 + 90;
    } else {
        secondsDeg += 6;
    }
    Sec.style.transform = `rotate(${secondsDeg}deg)`;

    const minutes = now.getMinutes();
    if(!minuteDeg) {
        minuteDeg = minutes * 6 + 90;
    } else if(seconds == 0) {
        minuteDeg += 6;
    }

    Min.style.transform = `rotate(${minuteDeg}deg)`;

    const hours = now.getHours();
    if(!hourDeg) {
        hourDeg = hours * 15 + 90;
    } else if(minutes == 0 && seconds == 0){
        hourDeg += 15;
    }
    Hour.style.transform = `rotate(${hourDeg}deg)`;

    console.log(hours,minutes, seconds);
    
}

setInterval(setTimer, 1000);