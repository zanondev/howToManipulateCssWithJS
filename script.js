//1) pegar ID da tag que engloba as imagens
const gallery = document.getElementById('gallery');

//2) função para manipular as imagens a partir de evento CLICK
const manipuladorClick = (evento) => {
    //constante recebendo o target do click
    const img = evento.target;
    //condição para verificar se a tag que foi clicada é IMG
    if(img.tagName === 'IMG') {
        //constante recebendo o pai da tag IMG (vai ser uma div no caso)
        const div = img.parentElement;
        //atribuindo uma classe CSS para aquela DIV (pai da img)
        div.className = 'imagem imagem--visivel';
    }
    //conficação para verificar se a tag clicada é a descrição (tag SPAN)
    if(img.tagName === 'SPAN') {
        //constante recebendo o pai da tag span (tag img no caso)
        const div = img.parentElement;
        //atrindo a classe css 'imagem' para aquela tag pai
        div.className = 'imagem';
    }
}

//eventListener para o evento de click na imagem
gallery.addEventListener('click', manipuladorClick);