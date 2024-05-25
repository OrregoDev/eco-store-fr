import styles from './navigation-bar.css';
import logo from '../../assets/img/logo.png'
import search_24dp_FILL0_wght400_GRAD0_opsz24 from '../../assets/img/search_24dp_FILL0_wght400_GRAD0_opsz24.svg';
import shopping_cart_24dp_FILL0_wght400_GRAD0_opsz24 from '../../assets/img/shopping_cart_24dp_FILL0_wght400_GRAD0_opsz24.svg'
import person_24dp_FILL0_wght400_GRAD0_opsz24 from '../../assets/img/person_24dp_FILL0_wght400_GRAD0_opsz24.svg'


export function NavigationBar() {
    
  return `
      <header class="${styles.header}" id="head">
      <!--header logo -->
        <div class="${styles.logo}">
          <img src="${logo}" alt="">
        </div>
      <!--header opciones -->
        <nav class="${styles.navigation}">
            <a href="#" class="${styles.active}">Home</a>
            <a href="#" id="about">About</a>
            <a href="#" id ="service">Service</a>
            <a href="#">Contact</a>
        </nav>
      <!-- header buscar, carrito y login -->
      <div class="${styles.nav_active}">
        <form action="" method="" class="${styles.search}" >
            <input type="text" name="q" class="${styles.search_input}" id="input_1" placeholder="Buscar...">
            <img src="${search_24dp_FILL0_wght400_GRAD0_opsz24}" alt="">
        </form>
        <div class="${styles.icon} ${styles.submenu}" id="carrito">
          <img src="${shopping_cart_24dp_FILL0_wght400_GRAD0_opsz24}"  alt="">
                        <div class="${styles.carrito}" id="carrito">
                            <div  id="lista-carrito">
                                
                                <div class="${styles.productos_carrito}"></div>
                            </div>    
                            <a href="#" id="vaciar-carrito" class="${styles.btn_3}">VAciar carrito</a>
                        </div>
        </div>
        <div class="${styles.icon}" id="user">
          <img src="${person_24dp_FILL0_wght400_GRAD0_opsz24}" alt="">
        </div>
      </div>

    </header>
  `
}