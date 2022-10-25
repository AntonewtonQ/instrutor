
let titulo = document.querySelector('.banner>h1');

function escrever(elemento) {
    let texto = elemento.innerHTML.split('');
    elemento.innerHTML ='';
    texto.forEach(function (letra, i){
        setTimeout(function(){
            elemento.innerHTML += letra;
        }, 75*i)
    });
}

escrever(titulo);