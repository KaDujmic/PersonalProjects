

// Define UI vars
const form = document.querySelector('#task-form');
const taksList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taksInput = document.querySelector('#task');


//Load all evenet listeners

loadEventListeners();
function loadEventListeners(){
  //DOM load event
  document.addEventListener('DOMContentLoaded', getTasks)
  //Add task event
  form.addEventListener('submit', addTask);
  //Remove task event
  taksList.addEventListener('click', removeTask);
  //Clear task event
  clearBtn.addEventListener('click', clearTasks);
  //Filter tasks event
  filter.addEventListener('keyup', filterTasks)
}

//Get Tasks from LS
function getTasks(){
  let tasks;
  if (localStorage.getItem('tasks') === null){
    tasks = [];
  }else{
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }

  tasks.forEach(function(task){
    //Create li element
    const li = document.createElement('li');
    //Add class to li
    li.className = 'collection-item';
    //Add class
    li.appendChild(document.createTextNode(task));
    //Create new link element
    const link = document.createElement('a');
    //Add class
    link.className = 'delete-item secondary-content';
    //Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    //Append the link to li
    li.appendChild(link);
    //Append li to taskList
    taksList.appendChild(li);
  })
}



//Add task
function addTask(e){
  if (taksInput.value === ''){
    alert('Add a task')
  }else{
    //Create li element
    const li = document.createElement('li');
    //Add class to li
    li.className = 'collection-item';
    //Add class
    li.appendChild(document.createTextNode(taksInput.value));
    //Create new link element
    const link = document.createElement('a');
    //Add class
    link.className = 'delete-item secondary-content';
    //Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    //Append the link to li
    li.appendChild(link);
    //Append li to taskList
    taksList.appendChild(li);
    
    //Store to local storage
    storeTaskToLocalStorage(taksInput.value);
    
    //Remove everything from taskInput
    taksInput.value = ''
  }
  e.preventDefault()
}


//Store Task
function storeTaskToLocalStorage(task){
  let tasks;
  if (localStorage.getItem('tasks') === null){
    tasks = [];
  }else{
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));

}

//Remove taks
function removeTask(e){
  if (e.target.parentElement.classList.contains('delete-item')){
    if (confirm('Are you sure?')){
      e.target.parentElement.parentElement.remove();

      //Remove from LS
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
}

//Remove from LS
function removeTaskFromLocalStorage(taskItem){
  if (localStorage.getItem('tasks') === null){
    tasks = [];
  }else{
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.forEach(function(task, index){
    if (taskItem.textContent === task){
      tasks.splice(index, 1)
    }
  });

  localStorage.setItem('tasks', JSON.stringify(tasks))
}




function clearTasks(){
  //taksList.innerHTML = '' Moze i ovako

  while(taksList.firstChild){
    taksList.removeChild(taksList.firstChild);
  }
  localStorage.clear('tasks')
}


function filterTasks(e){
  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach
  (function(task){
    const item = task.firstChild.textContent;
    if(item.toLocaleLowerCase().indexOf(text) != -1){
      task.style.display = 'block';
    }else{
      task.style.display = 'none';
    }
  });
}