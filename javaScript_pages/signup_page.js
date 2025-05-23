let username = document.getElementById('username');
let password = document.getElementById('password');
let conpass  = document.getElementById('confirm password');
let email    = document.getElementById('email');
let form     = document.getElementById('signupForm');
let status   = document.getElementById('is_admin');
let submit   = document.getElementById('submit');

let dataOfUser;

if(localStorage.user != null){
    dataOfUser = JSON.parse(localStorage.user)
}else{
    dataOfUser = [];
}

submit.onclick = function(){
    let newUser = {
        username:username.value,
        password:password.value,
        email:email.value,
        status:status.value,
    }
    dataOfUser.push(newUser);
    localStorage.setItem('user',JSON.stringify(dataOfUser))
    console.log(dataOfUser) 
}

// validations 
let nameLength = document.createElement("p");
nameLength.textContent = "username must be at least 3 characters long"; 
nameLength.style.fontSize = "12px";
nameLength.style.color = "red";
nameLength.style.margin = "0";

username.onblur = function(){
    if(this.value.length < 3){ 
        username.parentNode.insertBefore(nameLength, username.nextSibling.nextSibling);
        this.focus(); 
       return false; 
          
    }
    if(username.nextSibling.nextSibling.tagName == "P" ){
        username.nextSibling.nextSibling.remove();
        
    }
};


let passlength = document.createElement("P");
passlength.textContent = "Password must be at least 8 characters long"; 
passlength.style.fontSize = "12px";
passlength.style.color = "red";
passlength.style.margin = "0";

password.onblur = function(){
    if(this.value.length < 8){
        password.parentNode.insertBefore(passlength, password.nextSibling.nextSibling);
        this.focus();
       return false; 
    }
    if(password.nextSibling.nextSibling.tagName == "P" ){
        password.nextSibling.nextSibling.remove();
        
    }
};


let conpasslength = document.createElement("P");
conpasslength.textContent = "Passwords do not match";
conpasslength.style.fontSize = "12px";
conpasslength.style.color = "red";
conpasslength.style.margin = "0"; 

conpass.onblur = function(){
    if(this.value != password.value){ 
        conpass.parentNode.insertBefore(conpasslength, conpass.nextSibling.nextSibling);
        this.focus(); 
       return false; 
        
    }
    if(conpass.nextSibling.nextSibling.tagName == "P" ){
        conpass.nextSibling.nextSibling.remove();
        
    }
};