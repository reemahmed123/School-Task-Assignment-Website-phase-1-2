let datatask;
  if(localStorage.Tasks !=null){
    datatask=JSON.parse(localStorage.Tasks);
  }
  else{
    datatask=[];
  }
  let cnt = datatask.length;
  console.log(cnt);
      function addTask() {
        let teacherName = document.getElementById('teacherName').value;
        let taskTitle = document.getElementById('tasktitle').value;  
        let priorityinput = document.getElementById('priority').value;
        let descriptionInput = document.getElementById('description').value;
        let creator=localStorage.getItem('user1');
  
        let newTask={
          TaskID:cnt+1,
          teacherName:teacherName,
          taskTitle:taskTitle,
          priorityinput:priorityinput,
          descriptionInput:descriptionInput,
          creator:creator,
          status:'Incomplete'
        };
        datatask.push(newTask);
        localStorage.setItem('Tasks',JSON.stringify(datatask));
        window.location.href = "TaskList.html";
      }
      let tex = document.createTextNode(`${cnt+1}`);
  console.log(tex);
  document.getElementById("id").append(tex);