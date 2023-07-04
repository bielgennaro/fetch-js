document.getElementById("loginForm").addEventListener("submit", async function(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  try {
    const headers = {
      "Content-Type": "application/json",
      'TESTE': 'teste'
    };
    const init = {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({
        username: username,
        password: password
      })
    };
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", init);
    const jsonData = await response.json();

    const loginDataElement = document.getElementById("loginData");
    loginDataElement.innerHTML = "<h3>Login Data:</h3>" +
      "<p>Username: " + jsonData.username + "</p>" +
      "<p>Password: " + jsonData.password + "</p>";
  } catch (error) {
    console.log(error);
  }
});