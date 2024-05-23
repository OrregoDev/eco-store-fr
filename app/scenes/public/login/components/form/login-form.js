import { navigateTo } from '../../../../../Router.js';
import { formValidator } from '../../../../../helpers/index.js';

export async function LoginFormComponent() {
  const root = document.getElementById('root');

  root.innerHTML = `
      <div class = "${style.backgroundOpacity}">
        <form id="loginForm" class="${style.form}">
          <h2 class ="${style.Login}">Login</h2>
          <label for="email" class="${style.label}">Email:</label>
          <input type="text" id="email" name="email" autocomplete="email" class="${style['input-email']}">
          <label for="password" class="${style.label}">Password:</label>
          <input type="password" id="password" name="password" autocomplete="current-password" class="${style['input-password']}">
          <button type="submit" class="${style['button-send']}">Login</button>
        </form>
        <div class="${style.divRight}">
          <h2>Still do not have an account?</h2>
          <p>Register so you can login</p>
          <button class= "${style.registerBtn}">Register</button>
        </div>
      </div>
    `;
  
  const form = document.getElementById('loginForm');
  form.addEventListener('submit', async (event) => {
    event.preventDefault(); // previene el comportamiento por default que es, recargar la pagina
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if(!formValidator(email, password)){
      alert('Please fill in all fields');
      return;
    }
    const token = await login(email, password);
    if (token) {
      localStorage.setItem('token', token);
      navigateTo('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  });
}

export async function login(email, password) {
  try {
    const response = await fetch('http://localhost:9000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Error ${response.status}: ${errorMessage}`);
    }

    const data = await response.json();
    return data.token;
  } catch (error) {
    console.error('Login failed:', error);
    return null;
  }
}
