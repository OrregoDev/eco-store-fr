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
    <section class="${style.products}" id="products">

    </section>
</section>
    `;
    const logic = () => {
        const card = (data) => {
            console.log(data)
            let card = document.createElement('div')
            card.setAttribute('class', style.tarjeta)
            card.innerHTML = `
                            <img src=${data.image} alt="" class="imagen">
                            <h2 class="nombre">${data.name}</h2>
                            <button id=${data.id} class="Comprar">Comprar</button>
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
            console.log(data)
            document.querySelector('#products').append(contenedortarjet(data))
        })
      };

    return {
        pageContent,
        logic
    }
}