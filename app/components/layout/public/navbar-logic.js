import style from './navbar-logic.css'
import styles from '../../../scenes/public/homePublic/style.css'

export function logicNav(){
  console.log('hdsaads')
  let user = document.getElementById("user");
  let SwitchPopup = false;
  let popUp;
  user.addEventListener("click", () => {
    if (!SwitchPopup) {
      popUp = document.createElement("div");
      popUp.style.display = "block"; // Asegúrate de que el popup se muestre al crearlo
      SwitchPopup = true;
      // Aquí añades el contenido del popup al elemento popUp
      // ...
      // Luego lo añades al DOM, algo así como:
      // document.body.appendChild(popUp);
    } else {
      // Aquí ocultas el popup y restableces la variable SwitchPopup
      popUp.style.display = "none";
      SwitchPopup = false;
    }
    popUp.className = styles.backgroundOpacity;
    popUp.innerHTML = `
      <div class = "${style.backgroundOpacity}">
        <form id="loginForm" class="${style.form}">
          <h2 class ="${style.Login}">Login</h2>
          <label for="email" class="${style.label}">Email:</label>
          <input type="text" id="email" name="email" autocomplete="email" class="${style["input-email"]}">
          <label for="password" class="${style.label}">Password:</label>
          <input type="password" id="password" name="password" autocomplete="current-password" class="${style["input-password"]}">
          <button type="submit" class="${style["button-send"]}">Login</button>
        </form>
        <div class="${style.divRight}">
          <h2>Still do not have an account?</h2>
          <p>Register so you can login</p>
          <button class= "${style.registerBtn}" id="profile-register-btn">Register</button>
        </div>
      </div>
      `;

    // let profileRegisterBtn = document.getElementById("profile-register-btn");
    // profileRegisterBtn.addEventListener("click", (event) => {
    //   event.preventDefault();
    //   navigateTo("/register");
    // });

    root.appendChild(popUp);
    const form = document.getElementById("loginForm");
    form.addEventListener("submit", async (event) => {
      event.preventDefault(); // previene el comportamiento por default que es, recargar la pagina
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      if (!formValidator(email, password)) {
        alert("Please fill in all fields");
        return;
      }
      const token = await login(email, password);
      if (token) {
        localStorage.setItem("token", token);
        navigateTo("/dashboard");
      } else {
        alert("Invalid credentials");
      }
    });
  });
}