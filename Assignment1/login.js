document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const messageBox = document.getElementById("messageBox");

  loginForm.addEventListener("submit", async function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }

      const users = await response.json();
      const userExists = users.some((user) => user.username === username);
      
      const messageText = document.createElement("p");
      messageText.textContent = userExists ?"Login successful" : "Invalid username";
      messageBox.innerHTML = "";
      messageBox.appendChild(messageText);

    } catch (error) {
      alert("Failed to fetch user data");
    }
  });
}); 