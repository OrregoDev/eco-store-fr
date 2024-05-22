import styles from "./style.css";
import hill from "../../../assets/img/hill1.png";
import hill2 from "../../../assets/img/hill2.png";
import hill3 from "../../../assets/img/hill3.png";
import hill_4 from "../../../assets/img/hill4.png";
import hill_5 from "../../../assets/img/hill5.png";
import facebook from "../../../assets/img/facebook.png";
import casa from "../../../assets/img/casa.png";
import comida from "../../../assets/img/comida.png";
import hojaM from "../../../assets/img/hojaM.png";
import cepillo from "../../../assets/img/cepillo.png";
import papel from "../../../assets/img/papel.png";
import leaff from "../../../assets/img/leaf.png";
import logo from "../../../assets/img/logo.png";
import plant from "../../../assets/img/plant.png";
import tree from "../../../assets/img/tree.png";
import imagenAbout from "../../../assets/img/imagenAbout.png";
import whastp from "../../../assets/img/whastp.png";
import youtube from "../../../assets/img/youtube.png";
import arrow_back_ios_24dp_FILL0_wght400_GRAD0_opsz24 from "../../../assets/img/arrow_back_ios_24dp_FILL0_wght400_GRAD0_opsz24.svg";
import arrow_forward_ios_24dp_FILL0_wght400_GRAD0_opsz24 from "../../../assets/img/arrow_forward_ios_24dp_FILL0_wght400_GRAD0_opsz24.svg";
import person_24dp_FILL0_wght400_GRAD0_opsz24 from "../../../assets/img/person_24dp_FILL0_wght400_GRAD0_opsz24.svg";
import search_24dp_FILL0_wght400_GRAD0_opsz24 from "../../../assets/img/search_24dp_FILL0_wght400_GRAD0_opsz24.svg";
import shopping_cart_24dp_FILL0_wght400_GRAD0_opsz24 from "../../../assets/img/shopping_cart_24dp_FILL0_wght400_GRAD0_opsz24.svg";
import style from "../../public/login/components/form/login-form.css";
import { login } from "../login/components/form";
import { formValidator } from "../../../helpers";
import { navigateTo } from "../../../Router";

export async function HomePagePublic() {
  const root = document.getElementById("root");

  root.innerHTML = `
    <div ${styles.cuerpo}> 
    <!-- header  -->
    <header class="${styles.header}" id="head">
      <!--header logo -->
        <div class="${styles.logo}">
          <img src="${logo}" alt="">
        </div>
      <!--header opciones -->
        <nav class="${styles.navigation}">
            <a href="#" class="${styles.active}">Home</a>
            <a href="#" id="about">About</a>
            <a href="#">Service</a>
            <a href="#">Contact</a>
        </nav>
      <!-- header buscar, carrito y login -->
      <div class="${styles.nav_active}">
        <form action="" method="" class="${styles.search}" >
            <input type="text" name="q" class="${styles.search_input}" id="input_1" placeholder="Buscar...">
            <img src="${search_24dp_FILL0_wght400_GRAD0_opsz24}" alt="">
        </form>
        <div class="${styles.icon}" id="carrito">
          <img src="${shopping_cart_24dp_FILL0_wght400_GRAD0_opsz24}"  alt="">
        </div>
        <div class="${styles.icon}" id="user">
          <img src="${person_24dp_FILL0_wght400_GRAD0_opsz24}" alt="">
        </div>
      </div>

    </header>
    <!-- fondo de montañas -->
    <section class="${styles.parallax}">
        <img src="${hill}" id="hill1" alt="">
        <img src="${hill2}" id="hill2" alt="">
        <img src="${hill3}" id="hill3" alt="">
        <img src="${hill_4}" id="hill4" alt="">
        <img src="${hill_5}" id="hill5" alt="">
        <img src="${tree}" id="tree" alt="">
        <h2 id="text" class="${styles.text}">Tienda Online Ecologica</h2>
        <img src="${leaff}" id="leaf" alt="">
        <img src="${plant}" id="plant" alt="">
        
    </section>
    <!-- main -->
    <main>
      <!-- diseño de separacion -->
      <svg class="${styles.separation}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 320"><path fill="#003329" fill-opacity="1" d="M0,64L75.8,288L151.6,32L227.4,128L303.2,320L378.9,64L454.7,160L530.5,64L606.3,192L682.1,160L757.9,192L833.7,32L909.5,256L985.3,224L1061.1,192L1136.8,128L1212.6,224L1288.4,32L1364.2,288L1440,224L1440,0L1364.2,0L1288.4,0L1212.6,0L1136.8,0L1061.1,0L985.3,0L909.5,0L833.7,0L757.9,0L682.1,0L606.3,0L530.5,0L454.7,0L378.9,0L303.2,0L227.4,0L151.6,0L75.8,0L0,0Z"></path></svg>
        <!-- about us -->
        <section class="${styles.about} " id="about_secion">
          <div class="${styles.about_txt}">
            <h2 class="${styles.about_title}">About Us</h2>
            <div class="${styles.statistics}">
              <p>+5000 Sales</p>
              <p>+300 Clients</p>
              <p>50 Products</p>
              <p>+20 <br> Allies</p>
            </div>
            <p class="${styles.cont_txt}">Life is a fascinating journey filled with unexpected twists and unforgettable experiences. Each day presents us with new opportunities to grow, learn, and connect with the world around us. Along this path, we face challenges that strengthen us and moments of joy that remind us of the beauty of  being alive. It's important to remember that each person has.</p>
            <a href="" class="${styles.btn1}">See More</a>
          </div>
          <div class="${styles.about_img}">
            <img src="${imagenAbout}" alt="">
          </div>
        </section>
        <!-- seccion de productos -->
        <section class="${styles.product}">
          <h2 class="${styles.about_title}">Products</h2>
          <div class="${styles.category}">
            <button><img src="${hojaM}" alt=""></button>
            <button><img src="${casa}" alt=""></button>
            <button><img src="${comida}" alt=""></button>
            <button><img src="${papel}" alt=""></button>
          </div>
          <p class="${styles.text_product_top}">Top select</p>
          <div class="${styles.top_product}">
            <img class="${styles.arrow}" src=".${arrow_back_ios_24dp_FILL0_wght400_GRAD0_opsz24}" alt="">
            <div class="${styles.card}">
              <div class="${styles.card_prodct}">
                <img src="${cepillo}" alt="">
                <p class="${styles.title_product}">Cepillo de dientes de bamboo</p>
                <div class="${styles.producct_info}">
                  <p>Lorem, ipsum dolor.</p>
                  <button class="${styles.btn2}">Add to cart</button>
                </div>
              </div>
              <div class="${styles.card_prodct}">
                <img src="${cepillo}" alt="">
                <p class="${styles.title_product}">Cepillo de dientes de bamboo</p>
                <div class="${styles.producct_info}">
                  <p>Lorem, ipsum dolor.</p>
                  <button class="${styles.btn2}">Add to cart</button>
                </div>
              </div>
              <div class="${styles.card_prodct}">
                <img src="${cepillo}" alt="">
                <p class="${styles.title_product}">Cepillo de dientes de bamboo</p>
                <div class="${styles.producct_info}">
                  <p>Lorem, ipsum dolor.</p>
                  <button class="${styles.btn2}">Add to cart</button>
                </div>
              </div>
            </div>

            

            
            <img class="${styles.arrow}" src="${arrow_forward_ios_24dp_FILL0_wght400_GRAD0_opsz24}" alt="">
          </div>
        </section>
        <section class="${styles.artles}">
            <div class="${styles.algunos_comentarios}">
                <div class="${styles.perfil_comentario}"></div>
                <div class="${styles.comentarios_text}">
                    <p class="${styles.artles_ttitle}">Lorem ipsum dolor sit.</p>
                    <p class="${styles.arles_txt}">Lorem ipsum dolor sit amet consectetur molestias. Eos ratione ex nisi voluptatem possimus natus qui iste iure soluta quam, corporis doloremque obcaecati sunt sequi, quaerat ullam at deserunt. Neque itaque animi accusantium architecto vitae. Accusantium veritatis aspernatur vitae excepturi atque? Rem incidunt quia vitae quidem, fugiat dolore quas iusto sequi exercitationem illum aperiam eos fugit nostrum </p>
                    <a href="" class="${styles.btn3}">Read More</a>
                </div>
            </div>
            <div class="${styles.algunos_comentarios}">
                <div class="${styles.perfil_comentario}"></div>
                <div class="${styles.comentarios_text}">
                    <p class="${styles.artles_ttitle}">Lorem ipsum dolor sit.</p>
                    <p class="${styles.arles_txt}">Lorem ipsum dolor sit amet consectetur molestias. Eos ratione ex nisi voluptatem possimus natus qui iste iure soluta quam, corporis doloremque obcaecati sunt sequi, quaerat ullam at deserunt. Neque itaque animi accusantium architecto vitae. Accusantium veritatis aspernatur vitae excepturi atque? Rem incidunt quia vitae quidem, fugiat dolore quas iusto sequi exercitationem illum aperiam eos fugit nostrum </p>
                    <a href="" class="${styles.btn3}">Read More</a>
                </div>
            </div>
            <div class="${styles.algunos_comentarios}">
                <div class="${styles.perfil_comentario}"></div>
                <div class="${styles.comentarios_text}">
                    <p class="${styles.artles_ttitle}">Lorem ipsum dolor sit.</p>
                    <p class="${styles.arles_txt}">Lorem ipsum dolor sit amet consectetur molestias. Eos ratione ex nisi voluptatem possimus natus qui iste iure soluta quam, corporis doloremque obcaecati sunt sequi, quaerat ullam at deserunt. Neque itaque animi accusantium architecto vitae. Accusantium veritatis aspernatur vitae excepturi atque? Rem incidunt quia vitae quidem, fugiat dolore quas iusto sequi exercitationem illum aperiam eos fugit nostrum</p>
                    <a href="" class="${styles.btn3}">Read More</a>
                </div>
            </div>
        </section>

    </main>
    <footer class="${styles.pie_pagina}">
      <img class="${styles.logo}" src="${logo}" alt="img">
      <div class="${styles.contact}">
        <h2>Contacto</h2>
        <ul>
          <li>ATENCION AL CLIENTE</li>
          <li>Email:cliente.bioproteccion@gmail.com</li>
          <li>Cel: 30044</li>
        </ul>
      </div>

      <div class="${styles.Address}">
        <h2>Direccion</h2>
        <ul>
          <li>Zona Industrial Juanchito Torraza</li>
          <li>10 Bodega 03, Manizales- Caldas</li>
          <li>606 894 6604</li>
        </ul>
        <div class="${styles.Socials}">
          <h2>Redes Sociales</h2>
          <img src="${facebook}" alt="icon"><img src="${whastp}" alt="icon"><img src="${youtube}" alt="icon">
          <!-- en caso de tener que cambiar el color, se usa boxicons -->
        </div>
      </div>
    </footer>
    </div>
    `;
  let text = document.getElementById("text");
  let leaf = document.getElementById("leaf");
  let hill1 = document.getElementById("hill1");
  let hill4 = document.getElementById("hill4");
  let hill5 = document.getElementById("hill5");
  let header = document.getElementById("head");
  let user = document.getElementById("user");
  let carrito = document.getElementById("carrito");
  let input = document.getElementById("input_1");
  let aboutSection = document.getElementById("about_secion");
  let about = document.getElementById("about");

  about.addEventListener("click", (evento) => {
    evento.preventDefault()
    navigateTo('/about-us')
  })

  // Calcula la posición vertical de la sección "About Us"
  let aboutSectionPosition = aboutSection.offsetTop;

  window.addEventListener("scroll", () => {
    let value = window.scrollY;

    if (value < 114) {
      // Restaurar estilos cuando el usuario no ha alcanzado la sección "About Us"
      header.style.backgroundColor = "transparent";
      carrito.style.backgroundColor = "transparent";
      user.style.backgroundColor = "transparent";
      input.style.border = "none";
    } else {
      // Aplicar estilos cuando el usuario ha pasado cierta posición
      header.style.backgroundColor = "#f9f9f9";
      carrito.style.backgroundColor = "#298172";
      user.style.backgroundColor = "#298172";
      carrito.style.padding = "5px";
      user.style.padding = "5px";
      carrito.style.borderRadius = "50px";
      user.style.borderRadius = "50px";
      input.style.border = "2px solid #298172";
    }

    // Detener animaciones cuando el usuario alcanza la sección "About Us"
    if (value >= aboutSectionPosition) {
      return; // No hagas nada más si el usuario ha alcanzado la sección "About Us"
    }

    // Aplicar animaciones mientras el usuario no ha alcanzado la sección "About Us"
    text.style.marginTop = value * 2.5 + "px";
    leaf.style.left = value * 1.5 + "px";
    leaf.style.top = value * -1.5 + "px";
    hill1.style.top = value * 1 + "px";
    hill4.style.left = value * -1 + "px";
    hill5.style.left = value * 1 + "px";
  });

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
