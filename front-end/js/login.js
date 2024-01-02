const login =(e) =>{
  e.preventDefault();
  const email = document.getElementById('username').value;
  const password = document.getElementById('password').value;

   fetch('http://localhost:8090/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })
  .then((response) => response.json())
  .then((data)=> document.cookie = `id = ${data._id}`,{
    
   })
   .catch((error) =>console.error(error));

 
}
document.getElementById('login-form').addEventListener('submit',login);
