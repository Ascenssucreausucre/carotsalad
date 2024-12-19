class ExempleSection extends HTMLElement {
  connectedCallback() {
    const template = document.getElementById("exemple_section").content;
    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(template.cloneNode(true));

    this.initListeners(shadow);
  }

  initListeners(shadow) {
    const imgs = shadow.querySelectorAll(".spawn_imgs");
    const spawn_buttons = shadow.querySelectorAll(".spawn_button");
    const despawn_button = shadow.querySelector(".despawn_button");
    // const btns = shadow.querySelectorAll(".btn");

    // btns.forEach((btn) => {
    //   btn.style.display = "none";
    // });

    despawn_button.addEventListener("click", function () {
      imgs.forEach((img) => {
        img.style.display = "none";
      });
    });

    spawn_buttons.forEach((button) => {
      button.addEventListener("click", function () {
        const image = this.closest(".exemple").querySelector(".spawn_imgs");
        image.style.display = "block";
      });
    });
  }
}

customElements.define("exemple-section", ExempleSection);
