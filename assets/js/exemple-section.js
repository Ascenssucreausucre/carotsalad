class ExempleSection extends HTMLElement {
  connectedCallback() {
    const template = document.getElementById("exemple_section").content;
    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(template.cloneNode(true));
    this.initListeners(shadow);
  }

  initListeners(shadow) {
    const imgs = shadow.querySelectorAll(".output_img");
    const spawn_buttons = shadow.querySelectorAll(".spawn_button");
    const despawn_button = shadow.querySelector(".despawn_button");

    despawn_button.addEventListener("click", function () {
      console.log(imgs);
      imgs.forEach((img) => {
        img.style.display = "none";
      });
    });

    spawn_buttons.forEach((button) => {
      button.addEventListener("click", function () {
        const image = this.closest(".exemple").querySelector(".output_img");
        image.style.display = "block";
        console.log(image);
      });
    });
  }
}

customElements.define("exemple-section", ExempleSection);
