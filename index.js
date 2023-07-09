// Apresenta informações na área de console
// console.log();

/* Criação de variável
 const nome_var*/ 

//Busca o elemento pelo seu ID, e o const adiciona para a variável

// const itemCiclope = document.getElementById('ciclope');

// console.log(itemCiclope);

//Selecionou todos os personagens, pois eles tem essa classe. Jeito mais prático
const personagens = document.querySelectorAll('.personagem');

//Laço de repetição, onde para cada vez que percorrer, seleciona um dos personagens da lista de acordo com o mouse
personagens.forEach((personagem) => {   personagem.    addEventListener('mouseenter', () => {
    if(window.innerWidth < 450){
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    personagem.classList.add('selecionado');

        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');
        //Objetivo 2
        const imagemPersonagemGrande = document.querySelector('.personagem-grande');

        const idPersonagem = personagem.attributes.id.value;
        imagemPersonagemGrande.src = `./imagens/card-${idPersonagem}.png`;

        const nomePersonagem = document.getElementById('nome-personagem');
        nomePersonagem.innerText = personagem.getAttribute('data-name');
        const descricaoPersonagem = document.getElementById('descricao-personagem');
        descricaoPersonagem.innerText = personagem.getAttribute('data-description');

    })
})
