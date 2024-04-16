const botoes = document.querySelectorAll(".botao");
const text = document.querySelectorAll(".aba-conteudo");

for(let i=0;IDBObjectStore <botoes.length;i++{
    botoes[i].onclick = function(){

        for(let j=0;j<botoes.length;j++){
            botoes[j].classList.remover("ativo");
            textos[j].classList.remover("ativo");
        }

        botoes[i].classList.add("ativo");
        texto[i].classList.add("ativo");
    }
}

const cotadore = document.querySelectorAll("contador");

contadores[0],textContent = "Contagem regresiva";