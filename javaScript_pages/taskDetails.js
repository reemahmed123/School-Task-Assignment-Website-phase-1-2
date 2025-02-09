let tskid = window.location.search.split("=")[1];
    let tasks = JSON.parse(localStorage.getItem("Tasks"));
    let stat ,taskId, taskTitle;
    
    tasks.forEach(element => {
        if(element.TaskID == tskid){
            stat = element.status;
            taskId = element.TaskID;
            taskTitle = element.taskTitle;
            localStorage.setItem("currenttsk", JSON.stringify(element));
            let pagetitle = document.createTextNode(`${element.TaskID}`+" details");
            let titel = document.createTextNode(`${element.TaskID}`);
            let iden = document.createTextNode(`${element.TaskID}`);
            let nem = document.createTextNode(`${element.taskTitle}`);
            let teach = document.createTextNode(`${element.teacherName}`);
            let priori = document.createTextNode(`${element.priorityinput}`);
            let desk = document.createTextNode(`${element.descriptionInput}`);
            let adm = document.createTextNode(`${element.creator}`);
            let status;
            if(localStorage.getItem("status1") == "teacher"){
                status = document.createTextNode(stat);
            }
            document.getElementsByTagName("title")[0].append(pagetitle);
            document.getElementById("tsk").append(titel);
            document.getElementById("id").append(iden);
            document.getElementById("title").append(nem);
            document.getElementById("teacher").append(teach);
            document.getElementById("prio").append(priori);
            document.getElementById("desc").append(desk);
            document.getElementById("creator").append(adm);
            if(localStorage.getItem("status1") == "teacher"){
                document.getElementById("status").append(status);
            }
        }
    });

    if(stat == "Completed"){   //Check status
        document.getElementById("completeButton").textContent = "Incomplete";
        stat = "Incomplete";
    }
    else{
        document.getElementById("completeButton").textContent = "Completed";
        stat = "Completed";
    }

    function comp(){
        let task = JSON.parse(localStorage.getItem("currenttsk"));
        let completedTasks = JSON.parse(localStorage.getItem("completedTasks")) || [];
        
            if(task.status == "Incomplete"){
                task.status = "Completed";
                document.getElementById("status").innerHTML= "<strong>Status:</strong>" + task.status;
                document.getElementById("completeButton").textContent = "Incomplete";
                localStorage.setItem("currenttsk" ,JSON.stringify(task));
                let tasks = JSON.parse(localStorage.getItem("Tasks"));
                tasks.forEach(element=>{
                    if(element.TaskID == task.TaskID){
                        element.status = task.status;
                        completedTasks.push(element);
                        localStorage.setItem("Tasks" ,JSON.stringify(tasks));
                        localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
                    }
                })
            }
            else{
                task.status = "Incomplete";
                document.getElementById("status").innerHTML= "<strong>Status:</strong>" + task.status;
                document.getElementById("completeButton").textContent = "Completed";
                localStorage.setItem("currenttsk" ,JSON.stringify(task));
                let tasks = JSON.parse(localStorage.getItem("Tasks"));
                tasks.forEach(element=>{
                    if(element.TaskID == task.TaskID){
                        element.status = task.status;
                    }
                })
                
                localStorage.setItem("Tasks" ,JSON.stringify(tasks));            
                completedTasks.forEach(function(element, index){
                    if(task.TaskID === element.TaskID){
                        console.log(index);
                        completedTasks.splice(index, 1);
                        localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
                    }
                });
            }
        }

    if(localStorage.getItem("status1") == "teacher"){
        document.getElementById("statusli").hidden = false;
        document.getElementById("editButton").hidden = true;
        document.getElementById("deleteForm").hidden = true;
        document.getElementById("completeButton").hidden = false;
    }
    else{
        document.getElementById("statusli").hidden = true;
        document.getElementById("editButton").hidden = false;
        document.getElementById("deleteForm").hidden = false;
        document.getElementById("completeButton").hidden = true;
    }
    function deleteTask(){
        event.preventDefault();
        if(confirm("Are you sure you want to delete this task?!?!?")){
            let curr = JSON.parse(localStorage.getItem("currenttsk"));
            tasks.forEach(function(element,index){
                if (element.TaskID === curr.TaskID){
                    tasks.splice(index,1);
                    tasks.forEach(function(element,index){
                        element.TaskID=index+1;
                    })
                    localStorage.setItem("Tasks", JSON.stringify(tasks));
                    window.location.href = "TaskList.html";
                }
            })
        }
    }
