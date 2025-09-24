class AppHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header style="
        background: #f0f2f6ff; 
        color: white;          
        padding: 1rem;
        text-align: center;
        border-bottom: 1px solid rgba(255,255,255,0.2);
      ">
        <h1>${this.getAttribute('title') || 'App Header'}</h1>
      </header>
    `;
  }
}

customElements.define('app-header', AppHeader);
