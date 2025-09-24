class CharacterInfo extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="character-info">
        <h3>${this.getAttribute('title') || 'Character Info'}</h3>
        <p>${this.getAttribute('description') || 'No description available.'}</p>
      </div>
    `;
  }
}
customElements.define('character-info', CharacterInfo);
