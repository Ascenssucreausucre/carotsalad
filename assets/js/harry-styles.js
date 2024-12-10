import './nav-bar.js';
import './acc-ueil.js';

customElements.define("harry-styles", class extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav-bar></nav-bar>
            <acc-ueil></acc-ueil>
        `
    }
  })