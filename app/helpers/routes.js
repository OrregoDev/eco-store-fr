import { LoginPage } from "../scenes/public/login";
import { RegisterPage } from "../scenes/public/register";
import { HomePagePublic } from "../scenes/public/homePublic";
import { AboutUsPage } from "../scenes/public/about-us";
import { Service } from "../scenes/public/services/service";
import {productsPage} from "../scenes/public/productos"
import { Blogs } from '../scenes/public/blogg';
import { ProfileUser } from '../scenes/private/user_profile'

export const routes = {
  private: [
    { path: "/ProdileUser", component: ProfileUser},
  ],
  public: [
    { path: "/login", component: LoginPage },
    { path: "/register", component: RegisterPage },
    { path: "/home-page", component: HomePagePublic },
    { path: "/about-us", component: AboutUsPage },
    { path: "/services", component: Service},
    { path: "/product", component: productsPage},
    { path: '/blog', component: Blogs },
  ],
};

// aqui se pondran las posibles rutas que se pueden hacer