function mostrarProjetos() {
    const projetos = document.querySelector('.container-projetos');
    const lista = projetos.classList;

    lista.toggle('ocultar');
    
    const botao = document.querySelector('.btn-mostrar-projetos');
    
    if (lista.contains('ocultar')) {
        botao.innerHTML = 'Mostrar mais';
    }
    else {
        botao.innerHTML = 'Mostrar menos';
    }
}

// segunda forma

// const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
// const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

// // console.log(projetosInativos);

// botaoMostrarProjetos.addEventListener('click', () => {
//     projetosInativos.forEach(projetoInativo => {
//         projetoInativo.classList.add('ativo');
//     });

//     botaoMostrarProjetos.classList.add("remover");
// });