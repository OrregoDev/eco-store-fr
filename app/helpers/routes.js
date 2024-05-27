import { LoginPage } from '../scenes/public/login';
import { HomeScene } from '../scenes/private/home';
import { ReportScene } from '../scenes/private/reports';
import { SettingsScene } from '../scenes/private/settings';
import { UserScene } from '../scenes/private/users';
import { ForumScene } from '../scenes/private/forum';
import { Showcases } from '../scenes/private/showcases';
import { RegisterPage } from '../scenes/public/register';
// import { ProfileScene } from '../scenes/public/profile/profile';
import { GameScene } from '../scenes/private/games/games';
import { ProfileScene } from '../scenes/private/profile/profile';
import { HomePagePublic } from '../scenes/public/homePublic';
import { AboutUsPage } from '../scenes/public/about-us';
import { Service } from '../scenes/public/services/service';
import { Blogs } from '../scenes/public/blogg';

export const routes = {
  private: [
    { path: '/dashboard', component: HomeScene },
    { path: '/dashboard/reports', component: ReportScene },
    { path: '/dashboard/settings', component: SettingsScene },
    { path: '/dashboard/users', component: UserScene },
    { path: '/dashboard/forum', component: ForumScene },
    { path: '/dashboard/show-cases', component: Showcases },
    { path: '/dashboard/games', component: GameScene },
    { path: '/dashboard/profile', component: ProfileScene },
  ],
  public: [
    { path: '/login', component: LoginPage },
    { path: '/register', component: RegisterPage },
    { path: '/profile', component: ProfileScene },
    { path: '/home-page', component: HomePagePublic },
    { path: '/about-us', component: AboutUsPage },
    { path: '/services', component: Service },
    { path: '/blog', component: Blogs },
  ],
};

// aqui se pondran las posibles rutas que se pueden hacer
