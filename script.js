document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let errorMessage = document.getElementById("errorMessage");

    if (username === "Rishika" && password === "Rish#15") {
        alert("Login successful!");
        errorMessage.textContent = "";
    } else {
        errorMessage.textContent = "Invalid username or password!";
    }
});
