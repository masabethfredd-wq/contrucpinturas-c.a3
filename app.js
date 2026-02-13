// Cambio de modo oscuro
document.getElementById("modeToggle")
  .addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });

// Vista previa de color
document.querySelectorAll(".color")
  .forEach(color => {
    color.addEventListener("click", () => {
      document.getElementById("preview")
        .style.background = color.style.background;
    });
});
