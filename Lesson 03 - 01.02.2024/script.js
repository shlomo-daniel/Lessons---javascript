function task1() {
    const answer = document.getElementById("answer1").value;

    if (answer == "yellow") {
        document.getElementById("output1").innerHTML = "ripe"
    } else {
        document.getElementById("output1").innerHTML = "unripe"
    }
}

alert("welcome to git!")