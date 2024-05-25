import style from './navbar-logic.css'
import styles from '../../../scenes/public/homePublic/style.css'
import { navigateTo } from '../../../Router';


export function logicNav(){
  
  let user = document.getElementById("user");
  let SwitchPopup = false;
  let popUp;
  let servicePage = document.getElementById('service');

    servicePage.addEventListener('click', (evento) => {
      evento.preventDefault();
      navigateTo('/services');
    });



  const carrito = document.getElementById('carrito');
  const elemetos1 = document.getElementById('lista_1');
  const lista = document.querySelector('#lista-carrito div');
  const vaciarCarritoBtn = document.getElementById('vaciar-carrito');
  
  
  
  function cargarEventListeners(){
      elemetos1.addEventListener('click', comprarElemento);
      carrito.addEventListener('click', eliminarElemnto);
      vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
      
  }
  
  function comprarElemento(e) {
      if(e.target.classList.contains('agregar_carrito')){
          const elemeto = e.target.parentElement.parentElement;
          console.log(elemeto)
          leerDatosElemento(elemeto);
      }
  }
  
  function leerDatosElemento(elemento){
      const infoElemnto = {
          imagen: elemento.querySelector('img').src,
          titulo: elemento.querySelector('h3').textContent,
          precio: elemento.querySelector('.precio').textContent,
          id: elemento.querySelector('a').getAttribute('data-id')
      }
      insertarCarrito(infoElemnto);
  
  
  }
  
  
  function insertarCarrito(elemento){
      const row = document.createElement('div');
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
  
  
  function eliminarElemnto(e){
    let elemento,elementoId;
    if(e.target.classList.contains('borrar')){
        e.target.parentElement.parentElement.remove();
        elemento = e.target.parentElement.parentElement;
        elementoId = elemento.querySelector('a').getAttribute('data-id');
    }
}
  
  function vaciarCarrito() {
      while(lista.firstChild){
          lista.removeChild(lista.firstChild);
      }
      return false;
  }
  
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
  
  
  cargarEventListeners();
}