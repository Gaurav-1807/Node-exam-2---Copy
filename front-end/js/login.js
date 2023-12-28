const login =(e) =>{
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

   fetch('http://localhost:8090/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });

 
}
document.getElementById('login-form').addEventListener('submit',login);
