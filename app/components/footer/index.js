import style from "./footer.css";

export function footer (){
    return `
    <div class="${style.footer}">
        <div class="${style.logo}">
            <img src="" alt="">
        </div>
        <div class="${style.contact}">
            <h2>lorem</h2>
            <p>Lorem</p>
            <p>Lorem</p>
            <p>Lorem</p>
            <p>Lorem</p>
        </div>
        <div class="${style.asistentes}">
            <h2>lorem</h2>
            <p>Lorem</p>
            <p>Lorem</p>
            <p>Lorem</p>
            <p>Lorem</p>
        </div>
        <div class="${style.direccion}">
            <div class="${style.direccion_info}">
            <h2>Direccion</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
            <div class="${style.redes}">
            <h2>Redes sociales</h2>
            <a href=""><img src="" alt=""></a>
            <a href=""><img src="" alt=""></a>
            <a href=""><img src="" alt=""></a>
            </div>
        </div>
        <div class="${style.wave} ${style.wave1}"></div>
        <div class="${style.wave} ${style.wave2}"></div>
        <div class="${style.wave} ${style.wave3}"></div>
        <div class="${style.wave} ${style.wave4}"></div>
    </div>
    `
}