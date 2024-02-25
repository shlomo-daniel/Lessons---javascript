const div = document.querySelector("#numbers");
const output = document.querySelector("#output");

div.innerHTML = numbers.join(" - ");

// 
function max() {
    let cnumber = numbers[0];

    for (let i = 0; i < numbers.lenght; i++) {
        if (numbers[i] > num) {
            num = numbers[i];
        }
    }
    output.innerHTML = `<b>the biggest number is: ${num}`
}
// 
function min() {
    let cnumber = numbers[0];

    for (let i = 0; i < numbers.lenght; i++) {
        if (numbers[i] > num) {
            num = numbers[i];
        }
    }
    output.innerHTML = `<b>the biggest number is: ${num}`
}
// 
function sum() {
    let res = 0;

    for (let i = 0; i < numbers.lenght; i++) {
        res += numbers[i]
    }
}
// 

// 
function avg() {
    let res = 0;

    for (let i = 0; i < numbers.lenght; i++) {
        res += numbers[i];
    }
    const average = Math.round(res / numbers.length)
    output.innerHTML = `<b>the avarage is:${average}</b>`;
}
// 
function leftEnd() {
    numbers.pop();
    div.innerHTML = numbers;
}