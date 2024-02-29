// const traffic1 = document.querySelector('.traffic-light');

// const first = traffic1.querySelector('div');
// const second = traffic1.querySelector('div:nth-child(2)');
// const last = traffic1.querySelector('div:last-child');

// let trafficTimeOut;

// function reset() {
//     first.style.backgroundColor = '';
//     second.style.backgroundColor = '';
//     last.style.backgroundColor = '';
// }

// function green() {
//     reset();
//     last.style.backgroundColor = 'green';
//     trafficTimeOut = setTimeout(yellow, 3 * 1000);
// }

// function yellow() {
//     reset();
//     second.style.backgroundColor = 'yellow';
//     trafficTimeOut = setTimeout(red, 1000);
// }

// function red() {
//     reset();
//     first.style.backgroundColor = 'red';
//     trafficTimeOut = setTimeout(redAndYellow, 3 * 1000);
// }

// function redAndYellow() {
//     reset();
//     second.style.backgroundColor = 'yellow';
//     first.style.backgroundColor = 'red';
//     trafficTimeOut = setTimeout(green, 1000);
// }

// function stop() {
//     clearTimeout(trafficTimeOut);
// }

// red();

// 
// practice in class
// 


// main div of all lights
const trafficLight = document.querySelector(".traffic-light")

const redLight = trafficLight.querySelector("div")
const yellowLight = trafficLight.querySelector("div:nth-child(2)")
const greenLight = trafficLight.querySelector("div:last-child")

// reset all lights
function resetlights() {
    yellowLight.computedStyleMap.backgroundcolor = ""
}

function red() { }

function yellow() { }

function green() { }