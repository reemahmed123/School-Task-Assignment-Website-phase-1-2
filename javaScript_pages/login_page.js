let form = document.getElementById('loginForm');

function authentication(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    var userData = JSON.parse(localStorage.getItem('user'));
    if (userData) { 
        for (var i = 0; i < userData.length; i++) {
            if (userData[i].username === username && userData[i].password === password) {
                if (userData[i].status === "admin") {
                    localStorage.setItem("user1", username);
                    localStorage.setItem("status1", "admin");
                    window.location.href = "TaskList.html";
                    return;
                } else if (userData[i].status === 'teacher') {
                    localStorage.setItem("user1", username);
                    localStorage.setItem("status1", "teacher");
                    window.location.href = "TaskList.html";
                    return;
                }
            }
        }
            }

    alert('Invalid username or password. Please try again.');
}

form.addEventListener('submit', authentication);
