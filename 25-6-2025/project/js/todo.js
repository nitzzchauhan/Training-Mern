// var addTaskButton = document.getElementById("addTaskButton")
// var taskInput = document.getElementById("taskInput")
// var taskList = document.getElementById("taskList")

// function addTask() {
//     var taskText = taskInput.value.trim()
//     if (taskText == "") { 
//         alert("Invalid Input (Empty Input)"); 
//         return 
//     }

//     var listItem = document.createElement('li');
//     listItem.className = 'task'


//     var taskSpan = document.createElement('span');
//     taskSpan.textContent = taskText
//     var deleteButton = document.createElement('button');
//     deleteButton.textContent = "Delete"
//     deleteButton.className = "deleteButton"


//     listItem.appendChild(taskSpan)
//     listItem.appendChild(deleteButton)

//     taskList.appendChild(listItem)

//     deleteButton.addEventListener('click',deleteTask)


// }

// addTaskButton.addEventListener("click", addTask)

// function deleteTask(e){
//     console.log(e.target.parentNode.remove())
// }


// function addt() {

//     console.log(document.getElementsByClassName('task')[0].value)
// }