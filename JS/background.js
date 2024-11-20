const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");

// Tamaño del canvas
function updateCanvasSize() {
    // Establece el ancho y alto del canvas al tamaño completo del body
    canvas.width = document.body.scrollWidth;
    canvas.height = document.body.scrollHeight;

    // Asegúrate de que el canvas cubra toda la página (a veces puede haber un espacio extra)
    if (document.body.scrollWidth < window.innerWidth) {
        canvas.width = window.innerWidth;
    }
    if (document.body.scrollHeight < window.innerHeight) {
        canvas.height = window.innerHeight;
    }

    
}

updateCanvasSize();

// Configuración de partículas
const particlesArray = []; // Array para almacenar partículas
const numParticles = particleNumber(); // Número de partículas

function particleNumber(){
    const size = window.innerWidth; // Obtener el ancho de la ventana
    
        switch (true) {
            case size > 800:
                return 350; // Velocidad para pantallas grandes
            case size > 600:
                return 200; // Velocidad para pantallas medianas
            case size > 400:
                return 125; // Velocidad para pantallas pequeñas
            default:
                return 50; // Velocidad para pantallas muy pequeñas
        }
}

class Particle {

    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1 + 1;

        this.speedX = (Math.random() * 1) - 0.5;  // Aumentar el rango de movimiento en el eje X
        this.speedY = (Math.random() * 1) - 0.5;  // Aumentar el rango de movimiento en el eje Y

        // Inicializamos la opacidad
        this.currentOpacity = Math.random(); // Opacidad inicial aleatoria
        this.targetOpacity = Math.random();  // Objetivo de opacidad aleatoria
        this.opacitySpeed = 0.12;  // Velocidad de interpolación de opacidad
    }

    update() {
        // Actualizamos la posición
        this.x += this.speedX;
        this.y += this.speedY;

        // Rebote en los bordes
        if (this.x < 0 || this.x > canvas.width) {
            this.speedX *= -0.8; // Cambiar la dirección y reducir la velocidad
            this.x = Math.max(0, Math.min(this.x, canvas.width)); // Asegurarse de que no se salga del canvas
        }

        if (this.y < 0 || this.y > canvas.height) {
            this.speedY *= -0.8; // Cambiar la dirección y reducir la velocidad
            this.y = Math.max(0, Math.min(this.y, canvas.height)); // Asegurarse de que no se salga del canvas
        }

        // Interpolación de opacidad
        if (Math.abs(this.currentOpacity - this.targetOpacity) > 0.01) {
            this.currentOpacity += (this.targetOpacity - this.currentOpacity) * this.opacitySpeed;
        } else {
            this.targetOpacity = Math.random();
        }
    }

    draw() {
        ctx.fillStyle = `rgba(255, 255, 255, ${this.currentOpacity})`; 
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }

    clear(){
        ctx.clear();
    }
}

// Función para inicializar las partículas
function init() {
    particlesArray.length = 0;  // Limpiar el array de partículas
    for (let i = 0; i < numParticles; i++) {
        particlesArray.push(new Particle());
    }
}

// Función para animar las partículas
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiar el canvas
    particlesArray.forEach(particle => {
        particle.update();  // Actualizar la posición y la opacidad
        particle.draw();    // Dibujar la partícula
    });
    requestAnimationFrame(animate);  // Continuar la animación
}

// Inicialización y animación
init();
animate();
