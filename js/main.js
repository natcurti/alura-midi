function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);

    if (elemento != null && elemento.localName === 'audio'){
        elemento.play(); 
    } 
    
    else {
        console.log('Elemento não encontrado ou seletor inválido');
    }
}

const listaTeclas = document.querySelectorAll('.tecla');

/* 
Usando o loop while:

let contador = 0;

while (contador < listaTeclas.length) {
    const tecla = listaTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function (){
        tocaSom(idAudio);
    }

    contador = contador + 1;
} */ 

for (contador = 0; contador < listaTeclas.length; contador++) {
    const tecla = listaTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function (){
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {

        if (evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}
