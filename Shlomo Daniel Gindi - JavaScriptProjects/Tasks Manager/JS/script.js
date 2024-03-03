const tasksElem = document.querySelector(".tasks");

function addTask() {

    const input = document.querySelector('input');

    if (!input.value) {
        return;
    }

    const createLi = document.createElement('li');
    const createDiv = document.createElement('div');
    const createButton = document.createElement('button');

    tasksElem.appendChild(createLi);
    createLi.appendChild(createDiv);
    createLi.appendChild(createButton);
    createButton.innerHTML = 'x';
    createDiv.innerHTML = input.value;

    // remove button 
    createButton.addEventListener('click', function () {
        const ask = confirm(`are you sure you want to delete ${createDiv.innerHTML}?`);

        if (ask) {
            createLi.remove();
        }
    });

    input.value = '';
}

// add task by Enter
function press(eventInput) {
    if (eventInput.key == "Enter") {
        addTask();
    }
}