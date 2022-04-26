var textEL = document.getElementById("txt")
const countdown = document.getElementById("countdown")
var klikk = 0
let time = 30

let klikkområdeEl = document.getElementById("klikkområde")
let formEl = document.getElementById("form")
let myInterval;



formEl.addEventListener("submit", function(e){
    e.preventDefault();
    sendData(formEl, 2, klikk);
})

klikkområdeEl.addEventListener("click", function (e) {
    console.log(klikk, time)

    if (klikk == 0) {
        myInterval = setInterval(updateCountdown, 1000)
        document.getElementById("h2").remove();
    }
    klikk += 1
    textEL.innerHTML = "Klikk: " + klikk
    if (time <= 0) {
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
    if(time == 0){
        console.log("YYAYAYYAYAYYAYA")
    }    
}

