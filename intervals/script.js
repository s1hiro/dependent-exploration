// number of seconds that have passed
let time = 0;
// reference to the <span> containing the number
let counterElement = document.getElementById("time");

setInterval(function() {
    time++;
    counterElement.innerText = time;
}, 1000)

