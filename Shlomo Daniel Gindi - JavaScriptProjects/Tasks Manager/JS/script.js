// ul that contains all the tasks
const tasksElem = document.querySelector(".tasks");


function addTask() {

    const taskInput = document.querySelector('input');

    if (!taskInput.value) {
        return;
    }

    // all the elements that will be created
    const createLi = document.createElement('li');
    const createDiv = document.createElement('div');
    const createButton = document.createElement('button');
    const createButtonImportant = document.createElement('button');

    // append the elements
    tasksElem.appendChild(createLi);

    // create the div of the task
    createLi.appendChild(createDiv);
    createDiv.style.fontSize = "13px"

    // create the button important
    createLi.appendChild(createButtonImportant);
    createButtonImportant.innerHTML = '!';
    createButtonImportant.title = "Important"
    createButtonImportant.style.backgroundColor = '#63fb68';

    // create the button remove
    createLi.appendChild(createButton);
    createButton.innerHTML = 'x';

    // create the input as a task!
    createDiv.innerHTML = taskInput.value;

    // mark as important function
    createButtonImportant.addEventListener('click', function () {
        const boldedtask = createDiv.style;
        // boldedtask.fontWeight = "bold"
        if (boldedtask.fontWeight == "") {
            boldedtask.fontWeight = 'bold';
        } else {
            boldedtask.fontWeight = ""
        }

    });



    // remove button 
    createButton.addEventListener('click', function () {
        const ask = confirm(`Are you sure you want to delete "${createDiv.innerHTML}"?`);

        if (ask) {
            createLi.remove();
        }
    });

    taskInput.value = '';
}

// add task by Enter
function press(eventInput) {
    if (eventInput.key == "Enter") {
        addTask();
    }
}