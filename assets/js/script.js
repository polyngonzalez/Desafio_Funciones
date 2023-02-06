function pintar(parrafo, colorLetra) {
    parrafo.style.color = colorLetra;

};

elemento = document.querySelector("#miDiv");
elemento.addEventListener('click', function () {
    pintar(elemento, 'yellow')


});
