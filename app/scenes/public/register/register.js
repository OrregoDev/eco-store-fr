import styles from './register.css';

export async function RegisterPage() {
    const pageContent = `
        <div class="${styles["my-div"]} ${styles["my-border"]}">Hola mundo</div>
        <p>Esta es la vista para registrarse</p>
        <button id="register">Registrarse</button>
        `;

    //logic
    

    const logic = () => {
        const myBtn = document.querySelector('#register');
        myBtn.addEventListener('click', () => {
            alert('Registrado');
        });
    }
    return {
        pageContent,
        logic
    }
}