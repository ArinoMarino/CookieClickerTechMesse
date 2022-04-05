var textEL = document.getElementById("txt")
const countdown = document.getElementById("countdown")
var klikk = 0

/*
const startingMinutes = 0.1;
let time = (startingMinutes * 60)+1;
*/

let time = 9



 myInterval = setInterval(updateCountdown, 1000)

document.body.addEventListener("click", function (e) {
    console.log(klikk)

    if (klikk == 0) {
        document.getElementById("h2").remove();
    }
    klikk += 1
    textEL.innerHTML = "Klikk: " + klikk
    if (time == 0) {
        clearInterval(myInterval);
        countdown.innerHTML = '00:00'
        alert(klikk)
    }


})


function updateCountdown() {
    let seconds = (time % 60)-1;

    seconds = seconds < 10 ? '0' + seconds : seconds;
    time--;
    countdown.innerHTML = `00:${seconds}`;
    
}

