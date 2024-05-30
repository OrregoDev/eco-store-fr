import { navigateTo } from "../../../Router";
import background from "../../../assets/img/background.png";
import styles from "../../../scenes/public/about-us/style.css";

export function AboutUsPage() {
  const pageContent = `
  <body>
      <header>
          <section class="${styles.wallpaper_container}">
          </section>
      </header>
      <main>
          <section class="${styles.about_container}">
              <div class="${styles.about_title}">
                  <h1>About Us</h1>
              </div>
              <div class="${styles.general_objetive}">
                  <h2>General Objective</h2>
                  <p>The general objective of our Ecommerce page for ecological products is to provide an accessible and 
                  reliable online platform that is user-friendly to navigate, dedicated to sustainable and eco-friendly products, 
                  promoting a responsible and environmentally conscious lifestyle. We aim to encourage the adoption of 
                  responsible consumption practices, support local producers, and reduce the carbon footprint by supporting 
                  ventures that respect ecological balance.
                  </p>
              </div>
              <div class="${styles.project_scope}">
                  <h2>Project Scope</h2>
                  <p>The project will encompass the following key areas:</p>
                  <li>1. Ecommerce Platform Development: Creation of an intuitive and easy-to-navigate website, 
                  with advanced search functions, personalized 
                  recommendations, and an optimized user experience.</li>
                  <li>2. Product Catalog: Selection and curation of a wide variety of ecological products, including organic foods, 
                  personal care items, household products, and sustainable accessories. All products will be rigorously evaluated to 
                  ensure they meet 
                  ecological and sustainability standards.</li>
                  <li>3. Customer Service: Focusing on customer satisfaction and building long-term relationships.</li>
                  <li>4. Education and Awareness: The page will contain a blog and comment section to raise customer awareness 
                  about the importance of ecological products.</li>
              </div>
              <div class="${styles.Description}">
                  <h2>Project Description</h2>
                  <p>Our Ecommerce page for ecological products is positioned as a comprehensive solution for consumers seeking 
                  sustainable and environmentally friendly alternatives. The project is structured in several phases, 
                  starting with the development of a robust and user-friendly digital platform. This platform will offer a 
                  personalized and efficient shopping experience,
                  distinguished by its intuitive design and commitment to sustainability.</p>
                  <p>The product catalog will include a carefully selected range of ecological items, covering everything from organic 
                  foods to personal and household 
                  care products. Each product will undergo a rigorous evaluation process to guarantee its ecological authenticity.</p>
                  <p>Finally, our commitment to customer service will be a priority, ensuring that every interaction is positive and constructive. 
                  Through educational content and informative resources, we 
                  will also seek to inspire and empower our customers to adopt more responsible and sustainable consumption practices.</p>
                  <p>In summary, our Ecommerce store for ecological products will not only offer products but also become a benchmark in promoting 
                  a greener and more conscious lifestyle, 
                  benefiting both our customers and the environment.</p>
              </div>
          </section>
      </main>
  </body>
    `;
  const logic = () => {
    let user = document.getElementById("user");
    let SwitchPopup = false;
    let popUp;
    let servicePage = document.getElementById("service");
    let homePage = document.getElementById("home");
    let contactFooter = document.getElementById("contact")
 

  contactFooter.addEventListener('click', (evento) => {
    evento.preventDefault();
    navigateTo("/home-page")
    window.location.href = "#footer";
  })

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
