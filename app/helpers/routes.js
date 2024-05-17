import { Homepage } from '../scenes/public/homePublic';
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

export const routes = {
  private: [
    { path: '/dashboard', component: HomeScene },
    { path: '/dashboard/reports', component: ReportScene },
    { path: '/dashboard/settings', component: SettingsScene },
  ],
  public: [{ path: '/homePublic', component: Homepage }],
};
