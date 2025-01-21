document.getElementsByClassName("botao-flutuante")[0].addEventListener('click', function() {
    const conteudo = document.getElementById("conteudo");
    
    if (conteudo.classList.contains('hidden')) {
        conteudo.classList.remove('hidden');
        conteudo.classList.add('visible');
    } else {
        conteudo.classList.remove('visible');
        conteudo.classList.add('hidden');
    }
})