const signup = (e) => {
    e.preventDefault();
    const username = document.getElementById('username-signup').value;
    const password = document.getElementById('password-signup').value;
    console.log(username, password);
     fetch('http://localhost:8090/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
    alert('Signup successful')
    // const data = response.json();
    // console.log(data);
  }
  
  
  document.getElementById('signup-page').addEventListener("submit", signup)