import { navigateTo } from "../../../ritchie-olp-2024-1-js-fr/app/Router";

export function Link(data = {}, children) {
    const btn = document.createElement('BUTTON');
  
    const handleClick = (e) => {
      e.preventDefault(); // Prevenir cualquier acción predeterminada
      navigateTo(data.href);
    }
  
    btn.innerHTML = `${children ? children : ''}`;
    btn.type = 'button';
    btn.id = data.href;
    btn.addEventListener('click', handleClick);
  
    return btn;
  }
  