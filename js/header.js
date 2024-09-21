const showButton = document.querySelector('.showNav');
const panel = document.querySelector('.headerPanel');

const main = document.querySelector('main');
const footer = document.querySelector('footer')

let isShowing = false;




showButton.addEventListener('click', () => {
    if (isShowing === false) {
        IsShowing();
        isShowing = true;
    } else {
        IsNotShowing();
        isShowing = false;
    }
});


//OCULTA EL PANEL
function IsNotShowing() {
    let btnChildren = showButton.children;
    Array.from(btnChildren).forEach(child => {
        child.style.backgroundColor = '#fff'; // o cualquier otro valor que desees
        child.style.transform = 'rotate(0deg)'
    });

    panel.style.display = 'none';
}

//MUESTRA EL PANEL
function IsShowing() {
  let btnChildren = showButton.children;
  let degs;
  let rotateDirection = 1; // 1 para 45, -1 para -45

  Array.from(btnChildren).forEach(child => {
    child.style.backgroundColor = 'red';
    degs = rotateDirection * 45;
    rotateDirection *= -1; // cambia la dirección de rotación para el próximo elemento
    child.style.transform = `rotate(${degs}deg)`;
  });
  
  panel.style.display = 'flex';

 
}

//ANIMACION DE DESELECION
const navLinks = document.querySelectorAll('header nav a');
navLinks.forEach(link => {
    link.addEventListener('mouseleave', () =>{
        link.classList.add('leave');
        link.addEventListener('animationend', () => {link.classList.remove('leave')});
    });
});