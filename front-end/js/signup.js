const signup = (e) => {
    e.preventDefault();
    let obj ={
       email : document.getElementById("email-signup").value,
     username : document.getElementById('username-signup').value,
     password : document.getElementById('password-signup').value,
    }
    // console.log(username,email, password);
  
     fetch('http://localhost:8090/user/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    })
   .then((res)=>res.json())
   .then((data)=> document.cookie = `id = ${data._id}`)
   .catch((error)=> console.error(error))
   
    // const data = response.json();
    // console.log(data);
  }
  
  
  document.getElementById('signup-page').addEventListener("submit", signup)