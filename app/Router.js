import { DashboardLayout } from './components/layout/private/dashboard/dashboard-layout';
import { DashboardLayoutPublic } from './components/layout/public/layout';
import { routes } from './helpers/routes';


const API_URL = 'http://localhost:4000/api/auth/verify-token';

// Verificar token con la API
  export async function verifyToken(token) {
    try {
      const response = await fetch('http://localhost:4000/api/auth/verify-token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Error ${response.status}: ${errorMessage}`);
      }

      const data = await response.json();
      return [data.valid, data];
    } catch (error) {
      console.error('Token verification failed:', error);
      return [false, { message: error.message }];
    }
  }

// Navegar a una nueva ruta
export function navigateTo(path) {
  window.history.pushState({}, '', window.location.origin + path);
  Router();
}

// Verificar la autenticación y redirigir
async function checkAuth(path, params) {
  const token = localStorage.getItem('token');

  if (token) {
    const [isValid] = await verifyToken(token);
    if (isValid) {
      // Redirigir al dashboard si se intenta acceder al login o a la raíz
      if (path === '/home-page' || path === '/') {
        navigateTo('/home-page');
        return;
      }
      // Ejecutar componente privado correspondiente
      const privateRoute = routes.private.find((r) => r.path === path);
      if (privateRoute) {
        // hace la peticion al backend.
        const { pageContent, logic } = privateRoute.component(params);
        DashboardLayout(pageContent, logic)
        return;
      } else {
        navigateTo('/home-page'); // Redirigir a dashboard si la ruta privada no existe
      }
    } else {
      // Token no válido, redirigir a login
      navigateTo('/home-page');
    }
  } else {
    // Si no hay token, redirigir a login
    navigateTo('/home-page');
  }
}

// Definir y manejar el router
export async function Router() {
  const path = window.location.pathname; // /home-page
  const params = new URLSearchParams(window.location.search);
  
  // Verificar autenticación antes de decidir qué componente mostrar
  if (path === '/home-page') {
    const token = localStorage.getItem('token');
    if (token) {
      const [isValid] = await verifyToken(token);
      if (isValid) {
        navigateTo('/home-page');
        return;
      }
    }
  }

  // Comprobar rutas públicas y privadas
  const publicRoute = routes.public.find((r) => r.path === path);
  const privateRoute = routes.private.find((r) => r.path === path);

  if (publicRoute) {
    const params = new URLSearchParams(window.location.search)
    const {pageContent, logic} = publicRoute.component(params)
    DashboardLayoutPublic(pageContent,logic);
  } else if (privateRoute) {
    checkAuth(path, params);
  } else {
    console.warn('Ruta no encontrada:', path);
    navigateTo('/home-page');
  }
}

// Manejar el evento de retroceso/avance en el navegador
window.onpopstate = Router;
