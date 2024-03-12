document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const messageBox = document.getElementById("messageBox");
  
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
  
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          if (!response.ok) {
            throw new Error("API call unsuccessful");
          }
          return response.json();
        })
        .then((data) => {
          const userExists = data.some((user) => user.username === username);
  
          const messageText = document.createElement("p");
          messageText.textContent = userExists
            ? "Login successful"
            : "Invalid username";
          messageBox.innerHTML = "";
          messageBox.appendChild(messageText);
        })
        .catch((error) => {
          alert("API call unsuccessful");
        });
    });
  });
  