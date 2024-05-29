
import style from './style.css';

export function ProfileUser (){
    const pageContent = `
    <section class="${style.parent_container}">
    <div class="${style.welcome_title}">
        <h1>
            Bienvenido a tu Perfil
        </h1>
    </div>
    <div class="${style.container_info}">
        <div class="${style.container_personal_info}">
            <h2>
                Información Personal
            </h2>
            <form action="" method="get">
                <label for="name">Usuario:</label>
                <!-- <input type="text" name="name" maxlength="50"> -->
                <br><br>
                <label for="last_name">Apellido:</label>
                <!-- <input type="text" name="last_name" maxlength="60"> -->
                <br><br>
                <label for="direccion">Dirección:</label>
                <!-- <input type="text" id="direccion_entrega" name="direccion" required> -->
                <br><br>
                <label for="city">Ciudad:</label>
                <!-- <input type="text" name="city" maxlength="50"> -->
                <br><br>
                <label for="country">País:</label>
                <!-- <input type="text" name="country" maxlength="50"> -->
            </form>
        </div>
        <div class="${style.container_info_contact}">
            <h2>
                Información de Contacto
            </h2>
            <form action="" method="get">
                <label for="mail">Correo electrónico:</label>
                <!-- <input name="mail" type="email" required> -->
                <br><br>
                <label for="telefono">Teléfono:</label>
                <!-- <input type="tel" name="telefono" pattern="[0-9]{10}"> -->
            </form>
        </div>
        <div class="${style.buttons_container}">
            <button class="${style.btn_update}">Actualizar Perfil</button>
            <button class="${style.btn_delete}" id="deleteButton">Eliminar Perfil</button>
        </div>
    </div>
    </section>

    <!-- Modal HTML -->
    <div id="deleteModal" class="${style.modal}">
        <div class="${style.modal_content}">
            <div class="${style.delete_container}">
                <div class="${style.question}">
                    <h2>
                        ¿Seguro que quieres eliminar tu perfil?
                    </h2>
                </div>
                <div class="${style.btn_decision}">
                    <button class="${style.say_yes}">Si</button>
                    <button class="${style.say_no}" id="closeModal">No</button>
                </div>
            </div>
        </div>
    </div>
    `;
    const logic = () => {
    }
    

    return {
        pageContent,
        logic
    }
}