let tasks = JSON.parse(localStorage.getItem("tasks")) ?? [];

//! access ele
let button = document.getElementById('btn');
let form = document.getElementById('form');
let taskname = document.getElementById('name');
let taskdesc = document.getElementById('desc');
let taskptoirty = document.getElementById('proirity');
let tasklist = document.getElementById('tasklist');
let Filterproirity= document.getElementById('Filterproirity');

button.addEventListener('click', function () {

  if (document.body.classList.contains('dark')) {

    document.body.classList.remove('dark');
    button.innerHTML = 'dark';
  } else {
    document.body.classList.add('dark');
    button.innerHTML = 'light';
  }
});

function saveTasks(){
    localStorage.setItem('tasks',JSON.stringify(tasks));
}

Filterproirity.addEventListener('change',rendertasks);

function rendertasks() {
  tasklist.innerHTML='';
  tasks.filter((t)=>t.priorty==Filterproirity.value || Filterproirity.value=='All')
  .forEach((task, index) => {
    var newlistitem = document.createElement('div');
    newlistitem.setAttribute('class','task');
    newlistitem.innerHTML = `

  <p contenteditable="true" oninput="editName(${index}, this)">
  name : ${task.name} 
  </p>

  <p contenteditable="true" oninput="editDesc(${index}, this)"> 
  description: ${task.desc} 
  <p>

  priorty: ${task.priorty} 

  <button onclick="deletetask(${index})"style="background-color:red">delete</button>
  `;
    newlistitem.classList.add(`${task.priorty}`);
    tasklist.appendChild(newlistitem);
  })
}

function editName(index,ele){
tasks[index].name=ele.innerHTML;
saveTasks();
}

function editDesc(index,ele){
tasks[index].desc=ele.innerHTML;
saveTasks();
}


form.addEventListener('submit', function (e) {
  e.preventDefault();
  if (!taskname.value || !taskdesc.value) {
    return alert("please enter all data");
    
  }
  let val = taskname.value;
  tasks.push({ name: val, desc: taskdesc.value, priorty: taskptoirty.value });
  console.log(tasks);
  saveTasks();

  rendertasks();
  taskname.value = ' ';
  taskdesc.value = '';
  taskptoirty.value = 'high';
})

function deletetask(index) {
  if (confirm("are tou sure want delete")) {
    tasks.splice(index,1);
    saveTasks();
    rendertasks();
  }
}
rendertasks();