import style from "./navbar-logic.css";
import styles from "../../../scenes/public/homePublic/style.css";
import { navigateTo } from "../../../Router";
import { formValidator } from "../../../helpers";

export function logicNav() {
  
  let user = document.getElementById("user");
  let SwitchPopup = false;
  let registerView;
  let switchRegister = false;
  let profileRegisterBtn = document.getElementById("profile-register-btn");
  let popUp;
  let servicePage = document.getElementById("service");
  let homePage = document.getElementById("home");
  let contactFooter = document.getElementById("contact")
  
 

  contactFooter.addEventListener('click', (evento) => {
    evento.preventDefault();
    window.location.href = "#footer";
  })

  homePage.addEventListener("click", (evento) => {
    evento.preventDefault();
    navigateTo('/home-page')
    window.location.href = "#cliff";


  });

  servicePage.addEventListener("click", (evento) => {
    evento.preventDefault();
    navigateTo("/services");
  });

  const carrito = document.getElementById("carrito");
  const elemetos1 = document.getElementById("lista_1");
  const lista = document.querySelector("#lista-carrito div");
  const vaciarCarritoBtn = document.getElementById("vaciar-carrito");

  function cargarEventListeners() {
    elemetos1.addEventListener("click", comprarElemento);
    carrito.addEventListener("click", eliminarElemnto);
    vaciarCarritoBtn.addEventListener("click", vaciarCarrito);
  }

  function comprarElemento(e) {
    if (e.target.classList.contains("agregar_carrito")) {
      const elemeto = e.target.parentElement.parentElement;
      console.log(elemeto);
      leerDatosElemento(elemeto);
    }
  }

  function leerDatosElemento(elemento) {
    const infoElemnto = {
      imagen: elemento.querySelector("img").src,
      titulo: elemento.querySelector("h3").textContent,
      precio: elemento.querySelector(".precio").textContent,
      id: elemento.querySelector("a").getAttribute("data-id"),
    };
    insertarCarrito(infoElemnto);
  }

  function insertarCarrito(elemento) {
    const row = document.createElement("div");
    row.innerHTML = `
        <div class="${style.producto_carrito}">
          <div class="${style.producto_carrito_img_text}">
            <div class="${style.img_product_carrito}">
                <img src="${elemento.imagen}" width=100>
            </div>
            <div class="${style.info_product_carrito}">
                <div class="${style.text_product_carrito} ">
                    <p>${elemento.titulo}</p>
                    <p>Precio: $${elemento.precio}</p>
                      
                </div>
            </div>
          </div>
          <a herf="#" class="borrar ${style.eliminados}" data-id="${elemento.id}">Eliminar</a>
        </div>  
      `;
    console.log(row);
    lista.appendChild(row);
  }

  function eliminarElemnto(e) {
    let elemento, elementoId;
    if (e.target.classList.contains("borrar")) {
      e.target.parentElement.parentElement.remove();
      elemento = e.target.parentElement.parentElement;
      elementoId = elemento.querySelector("a").getAttribute("data-id");
    }
  }

  function vaciarCarrito() {
    while (lista.firstChild) {
      lista.removeChild(lista.firstChild);
    }
    return false;
  }

  user.addEventListener("click", () => {
    if (!SwitchPopup) {
      popUp = document.createElement("div");
      popUp.style.display = "block";
      SwitchPopup = true;
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
      root.appendChild(popUp);
    } else {
      popUp.style.display = "none";
      SwitchPopup = false;
    }
  
    const profileRegisterBtn = document.getElementById("profile-register-btn");
    
    let switchRegister = false;
  
    profileRegisterBtn.addEventListener("click", (event) => {
      event.preventDefault();
      if (!switchRegister) {
        switchRegister = true;
        popUp.style.display = "none";
        registerView = document.createElement("div");
        registerView.style.display = "block";
        registerView.className = styles.backgroundOpacity;
        registerView.innerHTML = `
          <div class = "${style.backgroundOpacity}">
            <form id="registerForm" class="${style.form}">
              <h2 class ="${style.Login}">Register</h2>
              <label for="name" class="${style.label}">Name:</label>
              <input type="text" id="name" name="name" autocomplete="email" class="${style["input-email"]}">
              <label for="lastname" class="${style.label}">Last Name:</label>
              <input type="text" id="lastname" name="email" autocomplete="email" class="${style["input-email"]}">
              <label for="email" class="${style.label}">Email:</label>
              <input type="text" id="email" name="email" autocomplete="email" class="${style["input-email"]}">
              <label for="password" class="${style.label}">Password:</label>
              <input type="password" id="password" name="password" autocomplete="current-password" class="${style["input-password"]}">
              <button type="submit" class="${style["button-send"]}">Register</button>
            </form>
            <div class="${style.divRight}">
              <h2>have an account?</h2>
              <p>click below to login</p>
              <button class= "${style.registerBtn}" id="return-login">Login</button>
            </div>
          </div>
        `;
        root.appendChild(registerView);
        const returnLoginBtn = document.getElementById("return-login");
  
    returnLoginBtn.addEventListener("click", () => {
      popUp.style.display = "block";
      registerView.style.display = "none";
      root.removeChild(registerView);
    });
      } else {
        switchRegister = false;
        popUp.style.display = "block";
        registerView.style.display = "none";
        root.removeChild(registerView);
      }
    });
    
  
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

  cargarEventListeners();
}
