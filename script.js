const gallery = document.getElementById('gallery'); //1) pegar ID da tag que engloba as imagens

const manipuladorClick = (evento) => { //2) função para manipular as imagens a partir de evento CLICK
    const img = evento.target; //constante recebendo o target do click

    //aparecer a descricao
    if(img.tagName === 'IMG') { //condição para verificar se a tag que foi clicada é IMG
        const div = img.parentElement; //constante recebendo o pai da tag IMG (vai ser uma div no caso)
        div.className = 'imagem imagem--visivel'; //atribuindo uma classe CSS para aquela DIV (pai da img)
    }
    
    //sumir a descricao
    if(img.tagName === 'SPAN') { //condição para verificar se a tag clicada é a descrição (tag SPAN)
        const div = img.parentElement; //constante recebendo o pai da tag span (tag img no caso)
        div.className = 'imagem'; //atrindo a classe css 'imagem' para aquela tag pai
    }
}
gallery.addEventListener('click', manipuladorClick); //eventListener para o evento de click na imagem