import styles from './dashboard-layout.css';

export function DashboardLayout(pageContent, logic) {

  const root = document.getElementById('root');

  root.innerHTML = `
  <div class="${styles.container}">
    <div class="${styles.sidebar}">
    </div>
    <div class="${styles.navbar}">
    </div>
    <div class="${styles.main}">
      ${pageContent}
    </div>
  </div>
  `;

  logic();
}