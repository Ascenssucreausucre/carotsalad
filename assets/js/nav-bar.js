class NavBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<header>
        <div id="logo_container">
          <img src="./assets/img/fornite.png" alt="Logo fortnite swag" />
          <span>Shifty Shaft</span>
        </div>
      </header>`;
  }
}

customElements.define("nav-bar", NavBar);
