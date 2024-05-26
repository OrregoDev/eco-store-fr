import styles from "./style.css";
import favicon from "../../../assets/img/favicon.png";
import logo from "../../../assets/img/favicon.png";
import vegetales from "../../../assets/img/vegetales.jpg";
import graficas from "../../../assets/img/graficas.jpg";
import belleza from "../../../assets/img/belleza.png";
import cuidado from "../../../assets/img/cuidado.png";
import hogar from "../../../assets/img/hogar.png";
import { navigateTo } from "../../../Router";
export function Service() {
  const pageContent = `
        <main>
        <h1>Services</h1>
        <h2>Embracing Sustainability for a Better Future</h2>
        <p>Welcome to our comprehensive guide on the burgeoning market for organic and ecological products. 
            Explore how these sustainable choices benefit health, environment, and the economy.</p>
        <img src="${vegetales}" alt="" class="${styles.pictureMain}">
        <h2>Benefits of Organic Products</h2>
        <p>The market for organic products has been experiencing significant growth driven by increasing consumer awareness of health and environmental sustainability. 
            This trend encompasses a wide range of products, including food, beverages, personal care items, 
            and household goods.</p>
        <p>The global organic products market was valued at approximately $160 billion in 2020 and is projected to reach $320 billion by 2025, growing at a compound 
            annual growth rate (CAGR) of around 14%.</p>
        <p>Consumers are increasingly aware of the potential health risks associated with synthetic pesticides, fertilizers, and genetically modified organisms (GMOs), 
            driving demand for organic foods that are perceived as healthier.</p>
        <p>Policies and subsidies promoting organic farming and certification standards are encouraging farmers to adopt organic practices.</p>
            <img src="${graficas}" alt="" class="${styles.pictureMain}">
            <h3>Do you like eco-store?:</h3>
            <p>We have the best products for you, we are the best page about organic products:</p>
            <div class="${styles.container}">
                <div class="${styles.products}">
                    <div class="${styles.imgProduct}"><img src="${belleza}" alt="" class="${styles.belleza}"></div>
                    <div class="${styles.descriptionProduct}"><button class="${styles.button}">See more</button></div>
                </div>
                <div class="${styles.products}">
                    <div class="${styles.imgProduct}"><img src="${cuidado}" alt="" class="${styles.cuidado}"></div>
                    <div class="${styles.descriptionProduct}"><button class="${styles.button}">See more</button></div>
                </div>
                <div class="${styles.products}">
                    <div class="${styles.imgProduct}"><img src="${hogar}" alt="" class="${styles.hogar}"></div>
                    <div class="${styles.descriptionProduct}"><button class="${styles.button}">See more</button></div>
                </div>
            </div>
        </main>
    
        
    </body>
    </html>`;

  const logic = () => {
    let user = document.getElementById("user");
    let SwitchPopup = false;
    let popUp;
    let servicePage = document.getElementById("service");
    let homePage = document.getElementById("home");
    let contactFooter = document.getElementById("contact");

    contactFooter.addEventListener("click", (evento) => {
      evento.preventDefault();
      navigateTo("/home-page");
      window.location.href = "#footer";
    });
    homePage.addEventListener("click", (evento) => {
      evento.preventDefault();

      navigateTo("/home-page");
    });

    servicePage.addEventListener("click", (evento) => {
      evento.preventDefault();
      navigateTo("/services");
    });

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
  };

  return {
    pageContent,
    logic,
  };
}
