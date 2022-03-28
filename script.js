if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js')
    .then(reg => console.log('Registro de SW exitoso', reg))
    .catch(err => console.warn('Error al tratar de registrar el sw', err))
}




/*para los objetos del sector trabajo*/
let animado= document.querySelectorAll(".animado");
function mostrarConScroll(){
  let scrollTop= document.documentElement.scrollTop;
  for(var i=0; i < animado.length; i++){
    let alturaAnimado= animado[i].offsetTop;
    if(alturaAnimado - 400 < scrollTop){
      animado[i].style.opacity=1;
      animado[i].classList.add("mostrarArriba");

    }
  }
}
window.addEventListener('load', mostrarConScroll);

