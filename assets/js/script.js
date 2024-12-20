document.addEventListener("DOMContentLoaded", function () {
  function detectBrowser() {
    const userAgent = navigator.userAgent;

    if (userAgent.includes("Edg")) {
      return "Microsoft Edge (Supporté)";
    } else if (userAgent.includes("OPR") || userAgent.includes("Opera")) {
      return "Opera (Supporté)";
    } else if (userAgent.includes("Chrome")) {
      return "Google Chrome (Supporté)";
    } else if (userAgent.includes("Firefox")) {
      const navAlert = document.createElement("div");
      navAlert.classList.add("nav_alert");
      navAlert.innerHTML =
        "Votre navigateur supporte partiellement cette fonctionnalité";
      const presentationSection = document.getElementById(
        "presentation_section"
      );
      presentationSection.prepend(navAlert);
      return "Mozilla Firefox (Support partiel)";
    } else if (userAgent.includes("Safari")) {
      return "Safari (Supporté)";
    } else if (userAgent.includes("MSIE") || userAgent.includes("Trident")) {
      const navAlert = document.createElement("div");
      navAlert.classList.add("nav_alert");
      navAlert.innerHTML =
        "Votre navigateur ne supporte pas cette fonctionnalité";
      const presentationSection = document.getElementById(
        "presentation_section"
      );
      presentationSection.prepend(navAlert);
      return "Internet Explorer (Non supporté)";
    } else {
      return "Navigateur inconnu";
    }
  }

  detectBrowser();
  console.log("moutard");
});
