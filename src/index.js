document.addEventListener("DOMContentLoaded", () => {
  // your code here
  
 
document.getElementById("submit").addEventListener('submit', function(event) {
  event.preventDeafault()
   let newTaskDesc = document.getElementById("new-task-description").value;
   let taskList = document.getElementById("tasks");
   
    taskList.innerHTML += `<li> ${newTaskDesc} </li>`;
    
    
  });
});
