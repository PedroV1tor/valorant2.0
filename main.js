var armasBotao = document.querySelectorAll('.armasBotao')
var armasConteudo = document.querySelectorAll('.armasConteudo')
var armas = document.querySelector('.armas')


function ModificarVisibilidade(num){

    if(armasConteudo[num].style.display == "block"){
        armasConteudo[num].classList.remove("crescer")
        armasConteudo[num].classList.add("diminuir")       
        
        armasBotao[num].innerHTML = "Abrir"
        setTimeout(() => {
            armasConteudo[num].classList.remove("diminuir")
            armasConteudo[num].style.display = "none"
        }, 300);

    }
    else{
       
        armasConteudo[num].classList.add("crescer")
        armasConteudo[num].style.display = "block"       
        armasBotao[num].innerHTML = "Fechar"
        
    }
}
for(let i=0;i<armasBotao.length;i++){
armasBotao[i].addEventListener('click',()=>{
    ModificarVisibilidade(i)
})}