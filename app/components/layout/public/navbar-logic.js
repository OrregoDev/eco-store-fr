import style from './navbar-logic.css'
import styles from '../../../scenes/public/homePublic/style.css'

export function logicNav(){
  console.log('hdsaads')
  let user = document.getElementById("user");
  let SwitchPopup = false;
  let popUp;


  const carrito = document.getElementById('carrito');
  const elemetos1 = document.getElementById('lista_1');
  const elemetos2 = document.getElementById('lista-2');
  const elemetos3 = document.getElementById('lista-3');
  const lista = document.querySelector('#lista-carrito div');
  const vaciarCarritoBtn = document.getElementById('vaciar-carrito');
  
  cargarEventListeners();
  function cargarEventListeners(){
      elemetos1.addEventListener('click', comprarElemento);
      elemetos2.addEventListener('click', comprarElemento);
      elemetos3.addEventListener('click', comprarElemento);
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
      row.classList.add('productoencarrito');
      row.innerHTML = `
          <div clas="img_product_carrito">
              <img src="${elemento.imagen}" width=100>
          </div>
          <div class="info_product_carrito">
              <div class="text_product_carrito">
                  <p>${elemento.titulo}</p>
                  <p>${elemento.precio}</p>
              </div>
              <div>
                  <a herf="#" class="eliminado" data-id="${elemento.id}">
              </div>
          </div>
      `;
      console.log(row);
      lista.appendChild(row);
  }
  
  
  function eliminarElemnto(e){
      let elemento,elementof;
      if(e.target.classList.contains('eliminado')){
          e.target.parentElement.parentElement.remove();
          elemento = e.target.parentElement.parentElement;
          elementof = elemento.querySelector('a').getAttribute('data-id');
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
  
  
  
}