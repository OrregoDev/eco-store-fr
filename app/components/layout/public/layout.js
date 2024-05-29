import { NavigationVar } from "../../navbar/index";
import { logicNav } from './navbar-logic'

export function DashboardLayoutPublic(pageContent, logic) {
  const root = document.getElementById('root');
  root.innerHTML = `
  <div class="">
    <div class="">
      ${NavigationVar()}
    </div>
    <div class="">
      ${pageContent}
    </div>
    <div class="">
    </div>
  </div>
  `;
  logic();
  logicNav();
  
}