document.addEventListener("DOMContentLoaded", function() {
    const numPapelitos = 500; // Número de papelitos
  
    for (let i = 0; i < numPapelitos; i++) {
      crearPapelito();
    }
  
    function crearPapelito() {
      const papelito = document.createElement("div");
      papelito.className = "papelito";
  
      const posicionX = Math.random() * window.innerWidth;
      const posicionY = Math.random() * window.innerHeight;
  
      papelito.style.left = `${posicionX}px`;
      papelito.style.top = `${posicionY}px`;
      papelito.style.backgroundColor = getRandomColor(); // Obtener un color aleatorio
  
      document.body.appendChild(papelito);
  
      papelito.addEventListener("animationend", () => {
        papelito.remove();
    });
    }
  
    function getRandomColor() {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  });
  
