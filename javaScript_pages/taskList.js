let nav=document.getElementById("nav");
let div=document.getElementById("div");
let tasks = JSON.parse(localStorage.getItem("Tasks"));
let user=localStorage.getItem('status1');
function renderTaskList(){
    let taskListElement=document.getElementById("tasklist");
    taskListElement.innerHTML="";
    if(user=="teacher"){
        document.getElementById("searchDiv").hidden = false;
      tasks.forEach(task =>{
        if(localStorage.getItem('user1')==task.teacherName){
            let listItem=document.createElement('li');
            let link=document.createElement('a');
            link.href=`taskDetails.html?TaskID=${task.TaskID}`;
            link.textContent=task.taskTitle;
            listItem.setAttribute("id" , task.TaskID);
            listItem.appendChild(link);
            taskListElement.appendChild(listItem);
        }
    })

    }
    else if (user=="admin"){
        document.getElementById("searchDiv").hidden = true;
        tasks.forEach(task =>{
            if(localStorage.getItem('user1')==task.creator){
                let listItem=document.createElement('li');
                let link=document.createElement('a');
                link.href=`taskDetails.html?TaskID=${task.TaskID}`;
                link.textContent=task.taskTitle;
                listItem.setAttribute("id" , task.TaskID);
                listItem.appendChild(link);
                taskListElement.appendChild(listItem);
            }
        })
        let btn=document.createElement('button')
        btn.textContent="Add New Task";
        div.appendChild(btn)
        btn.onclick=function(){
            location.href='add_task.html';
        }
    }
}
renderTaskList();

let datatask, taskid;
function search(){
    if(tasks !=null){
        datatask=JSON.parse(localStorage.getItem("Tasks"));
        datatask.forEach(element=>{
            if(localStorage.getItem('user1')==element.teacherName){
                taskid = element.TaskID;
                if(element.priorityinput != document.getElementById("priority").value){
                    document.getElementById(taskid).hidden = true;
                }
                else{
                    // console.log("i'm here");
                    document.getElementById(taskid).hidden = false;
            }
        }})
    }
}