function validateSignup(event) {
    event.preventDefault(); 

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var email = document.getElementById("email").value;

    var isValid = true; 
    var errorOccured = false;

    if (!isValidUsername(username)) {
        displayMessage("Invalid username format.");
        isValid = false;
        errorOccured = true;
    }

    if (!isValidPassword(password)) {
        displayMessage("Invalid password format.");
        isValid = false;
        errorOccured = true;
    }

    if (password !== confirmPassword) {
        displayMessage("Passwords do not match.");
        isValid = false;
        errorOccured = true;
    }

    if (!isValidEmail(email)) {
        displayMessage("Invalid email format.");
        isValid = false;
        errorOccured = true;
    }
    if (errorOccured) {
        return;
    }
    if (isValid) {
        displayMessage("Signup successful!");
    }

    return isValid;
}


function isValidUsername(username) {
    var usernameRegex = /^[a-zA-Z][a-zA-Z0-9_-]{2,19}$/;
    return usernameRegex.test(username);
}

function isValidPassword(password) {
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-_=+[\]{}|;:'",.<>?/`~])[A-Za-z\d!@#$%^&*()-_=+[\]{}|;:'",.<>?/`~]{8,}$/;
    return passwordRegex.test(password);
}

function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function displayMessage(message) {
    var messageBox = document.getElementById("messageBox");
    messageBox.innerHTML += message + '<br>';
    messageBox.className = "messagebox";
    messageBox.style.display = "block"; 
}
