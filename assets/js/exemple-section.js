class ExempleSection extends HTMLElement {
  connectedCallback() {
    const template = document.getElementById("exemple_section").content;
    this.appendChild(template.cloneNode(true));
  }

  render() {}
}

customElements.define("exemple-section", ExempleSection);
