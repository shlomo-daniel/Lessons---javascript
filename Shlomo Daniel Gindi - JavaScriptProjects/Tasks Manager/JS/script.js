// // js from lesson 14
// const tasks = document.querySelector(".tasks");

// // פונקציה להוספת אלמנטים
// function newTask(value = '') {
//     // יצירת אלמנט חדש
//     const li = document.createElement('li');

//     // הוספת האלמנט לתור הרשימה
//     tasks.appendChild(li);

//     // השמת התוכן של המשימה לאלמנט החדש
//     const div = document.createElement('div');

//     // מאפשרים למשתמש לערוך את התוכן של האלמנט
//     div.contentEditable = true;
//     div.innerHTML = value;
//     li.appendChild(div);

//     // יצירת לחצן מחיקה
//     const btn = document.createElement('button');
//     btn.innerHTML = 'x';

//     // יצירת אירוע - כל לחיצה על הלחצן תפעיל את הפונקציה של המחיקה
//     btn.addEventListener('click', function () {
//         const isAllowed = confirm(`האם אתה בטוח כי ברצונך למחוק את ${div.innerHTML}?`);

//         if (isAllowed) {
//             li.remove();
//         }

//         saveTasks();
//     });

//     li.appendChild(btn);

//     div.addEventListener('input', saveTasks);
// }
// // save to local storage 
// function saveTasks() {
//     const list = document.querySelectorAll('.tasks li');
//     const arr = [];

//     for (const li of list) {
//         const name = li.querySelector('div').innerText.trim();

//         if (name) {
//             arr.push(name);
//         }
//     }

//     localStorage.setItem('tasks', JSON.stringify(arr));
// }
// // load the tasks from local storage
// function initialData() {
//     if (localStorage.tasks) {
//         const tasks = JSON.parse(localStorage.tasks);

//         for (const task of tasks) {
//             newTask(task);
//         }
//     }
// }
// 
// end of lesson 14 -----------------------------------------
// 



// ul that contains all the tasks
const tasksElem = document.querySelector(".tasks");


function addTask(loadingtasks = "") {

    const taskInput = document.querySelector('input');

    if (!taskInput.value) {
        taskInput.value = loadingtasks;
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
        saveToLocal();
    });

    taskInput.value = '';
    saveToLocal();
}

// add task by Enter
function press(eventInput) {
    if (eventInput.key == "Enter") {
        addTask();
    }

}

// local storage*************************

// save to local storage
function saveToLocal() {
    // select the tasks in the list
    const taskList = document.querySelectorAll(".tasks li");
    // creat array to store tasks 
    const tasksSavedArray = [];
    // loop of the list one by one
    for (const loopedTasks of taskList) {
        currentTask = loopedTasks.querySelector("div").innerText.trim();
        // if there is tasks pust them to the array
        if (currentTask) {
            tasksSavedArray.push(currentTask);
        }
    }
    // store the tasks to local storage as string ("jason")
    localStorage.setItem("taskMemory", JSON.stringify(tasksSavedArray));
}



// !!!OUTPUT DATA!!!
// - recall data from the local storage into tasks list
// -- from -localstorage to -ul.tasks

function recallLocalstorage() {
    if (localStorage.taskMemory) {
        const recalledTasks = JSON.parse(localStorage.taskMemory);

        for (const recallCurrnt of recalledTasks) {
            addTask(recallCurrnt);
        }
    }
}
recallLocalstorage()
