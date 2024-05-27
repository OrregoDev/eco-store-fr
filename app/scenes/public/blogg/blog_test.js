import styles from './styles.css';
import logo from '../../../assets/img/logo.png';
import whatsapp from '../../../assets/img/whastp.png';
import youtube from '../../../assets/img/youtube.png';
import facebook from '../../../assets/img/facebook.png';
import cannabis from '../../../assets/img/metal-grinder-weed-canabis-oil-joint-posing.jpg';
import vegan from '../../../assets/img/eco-friendly-disposable-tableware-concept-saving-planet-rejection-plastic.jpg';
import mascarilla from '../../../assets/img/top-view-woman-relaxing-with-face-mask.jpg';
import ensalada from '../../../assets/img/plates-with-assorted-salads.jpg';

export function Blogs() {
  console.log('hola');

  const pageContent = `
<div ${styles.cuerpo}> 
    <main>
        <section class="${styles.section_blog}">
            <div class="${styles.container_blog}">
                <div class="${styles.side_left}">
                    <div>
                        <h2>Lorem ipsum</h2>
                        <p>Autor - Fecha</p>
                    </div>
                    <div class="${styles.img_blog}">
                        <img src="${ensalada}" alt=""/>
                    </div>
                </div>
                <div class="${styles.side_right}">
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore,
                        quaerat unde. Harum a iure laborum, perspiciatis sit ducimus
                        pariatur, officiis atque enim minima ratione? Nobis suscipit
                        doloribus, hic adipisci fugiat sed perferendis, debitis ab
                        praesentium error aliquid earum officiis similique modi quasi
                        assumenda! Quos accusantium tempora magni quo tempore consequuntur?
                        <br />
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
                        nobis voluptatum consequuntur assumenda et neque sed officia quam
                        minima rerum adipisci eos optio, commodi, architecto soluta, nostrum
                        porro? Adipisci obcaecati eligendi error eveniet sed molestias
                        nostrum consequatur. Minima eveniet facere nihil veritatis. Repellat
                        asperiores molestiae esse, totam aspernatur exercitationem vitae.
                    </p>
                </div>
            </div>
        </section>
        <section class="${styles.section_related_entries}">
            <div class="${styles.container_related}">
                <div class="${styles.title_related_entries}">
                    <h2>Related Entries</h2>
                </div>
                <div class="${styles.images_container}">
                    <div class="${styles.image_related}">
                        <img src="${vegan}"/>
                    </div>
                    <div class="${styles.image_related}">
                        <img src="${mascarilla}"/>
                    </div>
                    <div class="${styles.image_related}">
                        <img src="${cannabis}"/>
                    </div>
                </div>
            </div>
        </section>
        <section class="${styles.section_comments}">
            <div class="${styles.comments_container}">
                <div class="${styles.information}">
                    <h2>
                    Leave a comment
                    </h2>
                    <form action="#" method="get">
                        <input type="text" name="nombre" class="${styles.info_name}" placeholder="Nombre">
                        <input type="email" name="correo" class="${styles.email_add}" placeholder="Correo">
                        <textarea name="comentario" maxlength="500" placeholder="Comentario" class="${styles.textarea1}"></textarea>
                    </form>
                    <button class="${styles.btn_comment}">Submit</button>
                </div>
                <div class="${styles.comments}">
                    <h2>
                    Comments
                    </h2>
                    <textarea name="comentario" maxlength="500" placeholder="Comentario" class="${styles.textarea2}"></textarea>
                    <textarea name="comentario" maxlength="500" placeholder="Comentario" class="${styles.textarea2}"></textarea>
                    <textarea name="comentario" maxlength="500" placeholder="Comentario" class="${styles.textarea3}"></textarea>
                </div>
            </div>
        </section>
    </main>
    <footer class="${styles.pie_pagina}">
        <img class="${styles.logo}" src="${logo}" alt="img" />
        <div class="${styles.contact}">
            <h2>Contacto</h2>
            <ul>
                <li>ATENCION AL CLIENTE</li>
                <li>Email:cliente.bioproteccion@gmail.com</li>
                <li>Cel: 30044</li>
            </ul>
        </div>
        <div class="${styles.address}">
            <h2>Direccion</h2>
            <ul>
                <li>Zona Industrial Juanchito Torraza</li>
                <li>10 Bodega 03, Manizales- Caldas</li>
                <li>606 894 6604</li>
            </ul>
            <div class="${styles.socials}">
                <h2>Redes Sociales</h2>
                <img src="${facebook}" alt="icon" /><img
                src="${whatsapp}"
                alt="icon"
                /><img src="${youtube}" />
                <!-- en caso de tener que cambiar el color, se usa boxicons -->
            </div>
        </div>
    </footer>
</div>
`;

  const logic = () => {
    console.log('holaaaaaaa');
  };

  return {
    pageContent,
    logic,
  };
}
