document.addEventListener("DOMContentLoaded", function () {
  const imgs = document.querySelectorAll(".output_img");
  const spawn_buttons = document.querySelectorAll(".spawn_button");
  const despawn_button = document.querySelector(".despawn_button");

  despawn_button.addEventListener("click", function () {
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
});
