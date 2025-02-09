let curr = JSON.parse(localStorage.getItem("currenttsk"));
    let nem = document.createTextNode(`${curr.taskTitle}`);
    let teach = document.createTextNode(`${curr.teacherName}`);
    let priori = document.createTextNode(`${curr.priorityinput}`);
    let desk = document.createTextNode(`${curr.descriptionInput}`);
    document.getElementById("taskTitle").setAttribute('placeholder',`${curr.taskTitle}`);
    document.getElementById("teacherName").setAttribute('placeholder',`${curr.teacherName}`);
    document.getElementById("priority").setAttribute('placeholder',`${curr.priorityinput}`);
    document.getElementById("description").setAttribute('placeholder',`${curr.descriptionInput}`);
    
    function editTask(){
        let tsk = JSON.parse(localStorage.getItem("Tasks"));
        tsk.forEach(element => {
            if(element.TaskID == curr.TaskID){
                curr.taskTitle = document.getElementById("taskTitle").value;
                curr.teacherName = document.getElementById("teacherName").value;
                curr.priorityinput = document.getElementById("priority").value;
                curr.descriptionInput = document.getElementById("description").value;

                element.taskTitle = document.getElementById("taskTitle").value;
                element.teacherName = document.getElementById("teacherName").value;
                element.priorityinput = document.getElementById("priority").value;
                element.descriptionInput = document.getElementById("description").value;
            }
        });
        localStorage.setItem("Tasks",JSON.stringify(tsk));
        localStorage.setItem("currenttsk", JSON.stringify(curr));
        window.location.href("TaskList.html");
    }