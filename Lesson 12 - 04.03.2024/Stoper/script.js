// 
// task: crate a stoper that record the current time
// 

// overview
// 1- crate digital clock
// 2- button that stop the time
// 3- button that record the current time but not stoping the clock



// digital clock element selector
const digital = document.querySelector("#digital-clock");


function clockMotion() {
    // crate object
    const theTime = new Date();

    // get the real time
    const miliseconds = theTime.getMilliseconds();
    const seconds = theTime.getSeconds();
    const minutes = theTime.getMinutes();
    const hours = theTime.getHours();



    const digitalClock = document.querySelector("#digital-clock")

    if (miliseconds > 850 && miliseconds < 1000) {
        digitalClock.innerHTML = `${hours} ${minutes} ${seconds} ${miliseconds}`
    } else {
        digitalClock.innerHTML = `${hours}:${minutes}:${seconds}:${miliseconds}`
    }
    setInterval(clockMotion, 100)
}
function stoper() {

    const stoper_seconds = 0;
    const stoper_minutes = 0;
    const stoper_milisec = 0;

    stoper_seconds++
    stoper_minutes++
    stoper_milisec++
}