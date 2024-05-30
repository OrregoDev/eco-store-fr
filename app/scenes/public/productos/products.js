import style from './style.css'


export function productsPage(){
    const pageContent =   `
    <section class="${style.container_product}">
    <section class="${style.category}" id="categorias">
        <h1>Categorias</h1>
        <a href="#/Todos_los_Productos" id="Todos" class="${style.botoncategorias}">Todos los Productos</a>

        <a href="#/Aseo_Personal" id="aseopersonal" class="${style.botoncategorias}">Aseo Personal</a>

        <a href="#/Productos_Cannabicos" id="cannabis" class="${style.botoncategorias}">Productos Cannabicos</a>

        <a href="#/Productos_Alimenticios" id="alimentos" class="${style.botoncategorias}">Productos Alimenticios</a>

        <a href="#/Productos_Para_el_Hogar" id="hogar" class="${style.botoncategorias}">Productos Para el hogar</a>
    </section>
    <section class="${style.products}" id="lista_2">

    <div class="${style.padre}" id="modal">
    <div class="${style.container}" id="lista_1">
      <div class="${style.izquierda}">
        <div class="${style.imagenes}" id="img_1">
          <img src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" alt="" />
          <img src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" alt="" />
          <img src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" alt="" />
          <img src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" alt="" />
        </div>
      </div>
      <div class="${style.derecha}">
        <div class="${style.textos}">
          <h2 id="titulo_modal">Cepillo de dientes de bamboo</h2>
          <div class="${style.colores}">
            <p>Precio:</p>
            <div class="${style.coloresdots}">
              <div>$</div>
              <div id="precio_modal"></div>
              <div></div>
            </div>
          </div>
          <a class="agregar_carrito">Add to cart</a>
        </div>
      </div>
    </div>
  </div>
    </section>
</section>
    `;
    const logic = () => {
        const card = (data) => {
            let card = document.createElement('div')
            card.setAttribute('class', style.tarjeta)
            card.innerHTML = `
                            <img src=${data.image} alt="" class="imagen">
                            <h2 class="nombre">${data.name}</h2>
                            <p class="${style.precio} precio">${data.price}</p>
                            <a id=${data.id} class="leer_mas">Leer mas</a>
                        `
            return card;
        }
    
        const contenedortarjet = (data) => {
            let div = document.createElement("div");
            div.setAttribute('id','contenedortarjet')
            div.setAttribute('class', style.contenedortarjet)
    
            data.map( el => div.append(card(el)))
    
            return div
        }
        
        const ajax = (url, callback) => {
            fetch(url)
            .then(res => res.json())
            .then(data => callback(data))
            .catch(err => console.log(err))
        }
        const url = `http://localhost:4000/api/auth/get-products`;
        
        ajax(url,(data)=>{
            document.querySelector('#lista_2').append(contenedortarjet(data))
        })
        const elemetos1 = document.getElementById("lista_2");
        elemetos1.addEventListener("click", Elemento);
        
        const modal_product = document.getElementById('modal');

        function Elemento(e) {
            console.log(e)
            if (e.target.classList.contains("leer_mas")) {
              const elemento = e.target.parentElement;
              console.log(elemento,"aqui");
              
              let imagen = elemento.querySelector(".imagen").src
              let titulo = elemento.querySelector("h2").textContent
              let precio = elemento.querySelector(".precio").textContent
              let id = elemento.querySelector("a").getAttribute("data-id")
              console.log(imagen,titulo,precio,id)
              document.getElementById('titulo_modal').textContent = titulo
              modal_product.querySelector('img').src = imagen
              document.getElementById('precio_modal').textContent = precio
              modal_product.style.display = "flex"
            }
          }
      };

    return {
        pageContent,
        logic
    }
}