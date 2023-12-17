const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
const btnpopup = document.querySelector('.button-logpop');
const loginclose = document.querySelector('.icon-close');


function showMessageAndClose(message, isSuccess) {
    alert(message);
    wrapper.classList.remove('active-popup');
  }
  
registerlink.addEventListener('click', () => {
  wrapper.classList.add('active');
});

loginlink.addEventListener('click', () => {
  wrapper.classList.remove('active');
});

btnpopup.addEventListener('click', () => {
  wrapper.classList.add('active-popup');
});

loginclose.addEventListener('click', () => {
  wrapper.classList.remove('active-popup');
});

document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
  
    loginForm.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
  
      fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Invalid credentials');
          }
        })
        .then(data => {
          console.log('Success:', data);
          showMessageAndClose('Login successful', true);
          loginButton.textContent = 'Logged In';
        })
        
        .catch(error => {
          console.error('Error:', error);
          showMessageAndClose('Invalid credentials', false);
        });
    });

    const registerForm = document.getElementById('registerForm');
  
    registerForm.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const username = document.getElementById('rusername').value;
      const email = document.getElementById('remail').value;
      const password = document.getElementById('rpassword').value;
  
      fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
          showMessageAndClose('Registration successful');
        })
        .catch(error => {
          console.error('Error:', error);
          showMessageAndClose('Registration failed', false);
        });
    });
  });
  