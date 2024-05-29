import style from "./navbar-logic.css";
import styles from "../../../scenes/public/homePublic/style.css";
import { navigateTo } from "../../../Router";
import { verifyToken } from "../../../Router";
import { formValidator } from "../../../helpers/index";
import { login } from "../../../scenes/public/login/components/form";

export function logicNav() {
  console.log("hdsaads");
  let user = document.getElementById("user");
  let SwitchPopup = false;
  let popUp;
  let total = document.getElementById("precio_total");
  let precio = 0;
  let cantidad = 0;
  // const btn_product_nav = document.getElementById("producto_nav")
  // const btn_home_nav = document.getElementById("home_nav")

  // btn_home_nav.addEventListener('click',
  //   console.log("hola"),
  //   navigateTo("/home-page")
  // )
  // btn_product_nav.addEventListener('click',
  // console.log("hola"),
  // navigateTo("/product")
  // )

  const carrito = document.getElementById("carrito");
  const elemetos1 = document.getElementById("lista_1");
  const lista = document.querySelector("#lista-carrito div");
  const vaciarCarritoBtn = document.getElementById("vaciar-carrito");

  function cargarEventListeners() {
    elemetos1.addEventListener("click", comprarElemento);
    carrito.addEventListener("click", eliminarElemnto);
    carrito.addEventListener("click", sumando);
    carrito.addEventListener("click", restando);
    vaciarCarritoBtn.addEventListener("click", vaciarCarrito);
  }

  function sumando(e) {
    if (e.target.classList.contains("sumando")) {
      let hola = e.target.parentElement.parentElement
      let cantidades = parseInt(hola.querySelector('#cantidad').textContent)
      hola.querySelector('#cantidad').textContent = cantidades+1;
      console.log(cantidades)
      console.log(document.getElementById("precio_total"))
      let preciores = hola.querySelector('#precios').textContent;
      let soloNumeros = preciores.replace(/\D/g,"");
      let numpre = parseInt(soloNumeros);
      let canti = cantidades+1
      console.log(numpre*canti)
      precio += numpre*canti
      total.textContent = precio;
    }
  }

  function restando(e) {
    if (e.target.classList.contains("restando")) {
      let hola = e.target.parentElement.parentElement
      let cantidades = parseInt(hola.querySelector('#cantidad').textContent)
      hola.querySelector('#cantidad').textContent = cantidades-1;
      console.log(cantidades)
      console.log(document.getElementById("precio_total"))
      let preciores = hola.querySelector('#precios').textContent;
      let soloNumeros = preciores.replace(/\D/g,"");
      let numpre = parseInt(soloNumeros);
      let canti = cantidades-1
      console.log(numpre*canti)
      precio += numpre*canti
      total.textContent = precio;
    }
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
    const hijos = lista.children
    const hijosarray = Array.from(hijos);
    let esta;
    console.log(hijosarray);
    hijosarray.forEach((e) => {
      console.log(e);
      let tara = e.firstElementChild  
      console.log(tara);
      if (tara.getAttribute("data-id") === infoElemnto.id) {
        cantidad = parseInt(tara.querySelector("#cantidad").textContent);
        let sumar = tara.querySelector("#sumar");
        precio -= infoElemnto.precio
        cantidad += 1;
        console.log(cantidad)
        let precioTotal = infoElemnto.precio * cantidad;
        precio = precioTotal+precio;
        total.textContent = precio;
        tara.querySelector("#cantidad").textContent = cantidad;
        esta = true

        sumar.addEventListener("click", (e)=>{
          e.preventDefault()
          cantidad += 1;
          console.log("hola")
        })
      } 
    })
    if(esta){
      return
    }
    console.log(total.textContent)
    insertarCarrito(infoElemnto);
  }

  function insertarCarrito(elemento) {
    const row = document.createElement("div");
    row.innerHTML = `
        <div class="${style.producto_carrito}" data-id="${elemento.id}">
          <div class="${style.producto_carrito_img_text}">
            <div class="${style.img_product_carrito}">
                <img src="${elemento.imagen}" width=100>
            </div>
            <div class="${style.info_product_carrito} info_product_carrito">
                <div class="${style.text_product_carrito} ">
                    <p>${elemento.titulo}</p>
                    <p class="precio" id="precios">Precio: $${elemento.precio}</p>
                </div>
                <div class="${styles.cantidad}">
                      <p class="${styles.botones_cantidad} sumando" href="#" id="sumar">+</p>
                      <p id="cantidad" class="cantidad">1</p>
                      <p class="${styles.botones_cantidad} restando" href="#" id="restar">-<pa>
                </div>
            </div>
          </div>
          <a herf="#" class="borrar ${style.eliminados}" data-id="${elemento.id}">Eliminar</a>
        </div>  
      `;

    const numpre = parseInt(elemento.precio);
    console.log(precio)
    precio += numpre;
    total.textContent = precio;
    lista.appendChild(row);
  }

  

  function eliminarElemnto(e) {
    let elemento, elementoId;
    if (e.target.classList.contains("borrar")) {
      e.target.parentElement.parentElement.remove();
      elemento = e.target.parentElement.parentElement;
      elementoId = elemento.querySelector("a").getAttribute("data-id");

      let preciores = elemento.querySelector(".precio");
      let preciorestart = preciores.textContent;
      let soloNumeros = preciorestart.replace(/\D/g, "");
      console.log(soloNumeros);
      const numpre = parseInt(soloNumeros);
      cantidad = parseInt(elemento.querySelector("#cantidad").textContent)
      let precioTotal = cantidad * numpre;
      precio -= precioTotal;
      total.textContent = precio;
    }
  }

  function vaciarCarrito() {
    while (lista.firstChild) {
      lista.removeChild(lista.firstChild);
    }
    return false;
  }

  user.addEventListener("click", async () => {
    const token = localStorage.getItem("token");
    const [isValid] = await verifyToken(token);

    if (isValid) {
      navigateTo("/about-us");
      return;
    }

    if (!SwitchPopup) {
      popUp = document.createElement("div");
      popUp.style.display = "block"; // Asegúrate de que el popup se muestre al crearlo
      SwitchPopup = true;
      // Aquí añades el contenido del popup al elemento popUp
      // ...
      // Luego lo añades al DOM, algo así como:
      // document.body.appendChild(popUp);
    
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
        // root.removeChild(registerView);
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
      console.log(token);
      if (token) {
        localStorage.setItem("token", token);
        navigateTo("/home-page");
      } else {
        alert("Invalid credentials");
      }
    });
  });

  const formSearch = document.getElementById("form_search");
  const containerSearch = document.getElementById("container_search");
  const inputformSearch = document.getElementById("input_1");

  console.log(inputformSearch);

  inputformSearch.addEventListener("keyup", (e) => {
    const value = e.target.value;
    setTimeout(async () => {
      const productsLike = await fetch(
        "http://localhost:4000/api/auth/search-products/" + value
      );
      const productsLikeFromJson = await productsLike.json();
      productsLikeFromJson.forEach((product) => {
        containerSearch.innerHTML += " " + product.name
      });
    }, 1000);
  });

  // Función para mostrar el contenedor de búsqueda
  function mostrarContainerSearch() {
    containerSearch.style.display = "block";
  }

  // Función para ocultar el contenedor de búsqueda
  function ocultarContainerSearch() {
    containerSearch.style.display = "none";
  }

  // Evento focus en el formulario de búsqueda
  formSearch.addEventListener("focusin", mostrarContainerSearch);

  // Evento blur en el formulario de búsqueda
  formSearch.addEventListener("focusout", ocultarContainerSearch);

  // Evento click en el contenedor de búsqueda
  containerSearch.addEventListener("click", function (event) {
    event.stopPropagation(); // Evita que el clic se propague al contenedor principal
  });

  cargarEventListeners();
}
