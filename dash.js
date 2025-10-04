const hamb = document.querySelector('.hamb')
const nav = document.querySelector('.desktop')
const fechar = document.querySelector('.fecharM')
const navdesk = document.querySelector('.navdesk')

hamb.addEventListener('click', abrirMenu)

function abrirMenu(){
    nav.classList.toggle('ativo')
}

fechar.addEventListener('click',fecharMenu)

function fecharMenu(){
    nav.classList.toggle('ativo')
    
}