import styles from './style.css';
import favicon from '../../../assets/img/favicon.png'
import logo from '../../../assets/img/favicon.png';
import vegetales from '../../../assets/img/vegetales.jpg'
import graficas from '../../../assets/img/graficas.jpg';
import belleza from '../../../assets/img/belleza.png';
import cuidado from '../../../assets/img/cuidado.png';
import hogar from '../../../assets/img/hogar.png';
export function Service() {
    let root = document.getElementById('root');
    root.innerHTML = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style.css">
        <link rel="icon" href="${favicon}">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
        <title>Services</title>
    </head>
    <body>
        <header class="${styles.header}">
            <div class="${styles.logo}"><img src="${logo}" alt="" class="${styles.dimensions}"></div>
            <nav class="${styles.nav}">
                <ul>
                    <li>
                        <a href="">Home</a>
                        <a href="">About</a>
                        <a href="">Service</a>
                        <a href="">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
        <main>
        <h1>Services</h1>
        <h2>Embracing Sustainability for a Better Future</h2>
        <p>Welcome to our comprehensive guide on the burgeoning market for organic and ecological products. 
            Explore how these sustainable choices benefit health, environment, and the economy.</p>
        <img src="${vegetales}" alt="" class="${styles.pictureMain}">
        <h2>Benefits of Organic Products</h2>
        <p>The market for organic products has been experiencing significant growth driven by increasing consumer awareness of health and environmental sustainability. 
            This trend encompasses a wide range of products, including food, beverages, personal care items, 
            and household goods.</p>
        <p>The global organic products market was valued at approximately $160 billion in 2020 and is projected to reach $320 billion by 2025, growing at a compound 
            annual growth rate (CAGR) of around 14%.</p>
        <p>Consumers are increasingly aware of the potential health risks associated with synthetic pesticides, fertilizers, and genetically modified organisms (GMOs), 
            driving demand for organic foods that are perceived as healthier.</p>
        <p>Policies and subsidies promoting organic farming and certification standards are encouraging farmers to adopt organic practices.</p>
            <img src="${graficas}" alt="" class="${styles.pictureMain}">
            <h3>Do you like eco-store?:</h3>
            <p>We have the best products for you, we are the best page about organic products:</p>
            <div class="${styles.container}">
                <div class="${styles.products}">
                    <div class="${styles.imgProduct}"><img src="${belleza}" alt="" class="${styles.belleza}"></div>
                    <div class="${styles.descriptionProduct}"><button class="${styles.button}">See more</button></div>
                </div>
                <div class="${styles.products}">
                    <div class="${styles.imgProduct}"><img src="${cuidado}" alt="" class="${styles.cuidado}"></div>
                    <div class="${styles.descriptionProduct}"><button class="${styles.button}">See more</button></div>
                </div>
                <div class="${styles.products}">
                    <div class="${styles.imgProduct}"><img src="${hogar}" alt="" class="${styles.hogar}"></div>
                    <div class="${styles.descriptionProduct}"><button class="${styles.button}">See more</button></div>
                </div>
            </div>
        </main>
    
        
    </body>
    </html>`;
  }