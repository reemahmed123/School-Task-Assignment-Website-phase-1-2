let userStatus=localStorage.getItem('status1');
let navAdd=document.getElementsByTagName("nav")[0];

let logOut=document.createElement('a');
logOut.href="login_page.html";
logOut.textContent="Log out";
logOut.onclick = function(){logout();};
logOut.id = "LogOut";


if(userStatus=="teacher"){
    let link1=document.createElement('a');
      
      link1.href="completed_tasks.html";
      link1.textContent="Completed Tasks List";
      navAdd.appendChild(link1);
}
else if(userStatus=="admin"){
    let link1=document.createElement('a');
        link1.href="add_task.html";
        link1.textContent="Add New Task";
        navAdd.appendChild(link1);
}
navAdd.appendChild(logOut);
function logout(){
    localStorage.removeItem("user1");
    localStorage.removeItem("status1");
    window.location.href = "login_page.html";
}