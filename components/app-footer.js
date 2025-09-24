class AppFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
        ${this.getAttribute('text') || 'Default Footer'}
      </footer>
    `;
  }
}
customElements.define('app-footer', AppFooter);
