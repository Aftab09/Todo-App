let form = document.getElementById("form");
let input = document.getElementById('input');
let msg = document.getElementById("msg");
let tasks = document.getElementById("tasks");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("button clicked!");

    formValidation();
});

let formValidation = () => {
    if (input.value === "") {
        msg.innerHTML = "Task cannot be blank";
        console.log("failed!");
      } else {
        console.log("success");
        msg.innerHTML = "";

        acceptData();
      }
};

let data = {};
let acceptData = () => {
  data.text = input.value;
  createTask();
  console.log(data);
}

// create task

let createTask = () => {
  tasks.innerHTML += `
  <div>
    <p>${data.text}</p>
    <span class="options">
      <i onClick="editTask(this)" class="fas fa-edit"></i>
      <i onClick="deleteTask(this)" class="fas fa-trash-alt"></i>
    </span>
  </div>  
  `;
  input.value = "";
}

// delete task
let deleteTask = (e) => {
  var delTask = document.getElementById("tasks");
//  var strikeThrough =  e.parentElement.parentElement.style.textDecoration = "line-through";
  delTask.removeChild(delTask.firstElementChild);

}


//edit task
let editTask = (e) => {
  input.value = e.parentElement.parentElement.firstElementChild.innerHTML;
  e.parentElement.parentElement.remove();
}
