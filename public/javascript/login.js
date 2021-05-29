async function loginHandler () {
  const loginEmail = document.querySelector('#email-login').value;
  const loginPassword = document.querySelector('#password-login').value;

  if (loginEmail && loginPassword) {
    const response = await fetch('/api/users/login', {
      method: 'post',
      body: JSON.stringify({
        loginEmail,
        loginPassword
      }),
      headers: { 'Content-Type': 'application/json'}
    });

    if(response.ok) {
      console.log(response);
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText)
    }
  }
};

async function createAccountHandler () {
  const username = document.querySelector('#username-signup').value;
  const email = document.querySelector('#email-signup').value;
  const password = document.querySelector('#password-signup').value;

  if (username && email && password) {
    const response = await fetch('/api/users/', {
      method: 'post',
      body: JSON.stringify({
        username, 
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json'}
    });

    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText)
    }
  }
};

document.querySelector('#loginBtn').addEventListener('click', loginHandler);
document.querySelector('#submitNewUserBtn').addEventListener('click', createAccountHandler);