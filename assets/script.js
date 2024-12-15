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

function detectBrowser() {
  const userAgent = navigator.userAgent;

  if (userAgent.includes("Edg")) {
    return "Microsoft Edge";
  } else if (userAgent.includes("OPR") || userAgent.includes("Opera")) {
    return "Opera";
  } else if (userAgent.includes("Chrome")) {
    return "Google Chrome";
  } else if (userAgent.includes("Firefox")) {
    return "Mozilla Firefox";
  } else if (userAgent.includes("Safari")) {
    return "Safari";
  } else if (userAgent.includes("MSIE") || userAgent.includes("Trident")) {
    return "Internet Explorer";
  } else {
    return "Navigateur inconnu";
  }
}

console.log(detectBrowser());




});
