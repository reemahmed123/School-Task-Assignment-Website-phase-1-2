var completedTasks = JSON.parse(localStorage.getItem("completedTasks")) || [];
    if(completedTasks[0] == null){
        var empty = document.createElement("p");
        var str = document.createElement("strong");
        str.style.color="white";
        str.innerHTML = "There are no completed tasks yet!";
        empty.appendChild(str);
        document.getElementById("ul").appendChild(empty);
    }

    completedTasks.forEach(function(task){
        var newTask = document.createElement("li");
        var Tlink = document.createElement("a");
        Tlink.href = `taskDetails.html?TaskID=${task.TaskID}`;
        Tlink.textContent = task.taskTitle;
        newTask.appendChild(Tlink);
        document.getElementById("ul").appendChild(newTask);
    });
