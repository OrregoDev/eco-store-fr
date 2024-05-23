import { NavigationBar } from "../../navbar/index";
import { logicNav } from './navbar-logic'

export function DashboardLayoutPublic(pageContent, logic) {
  const root = document.getElementById('root');
  root.innerHTML = `
  <div class="">
    <div class="">
      ${NavigationBar()}
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