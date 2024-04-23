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
const tempoObjetivo1 = new Date("2024-10-05T00:00:00");

contadores[0],textContent = calculaTempo(tempoObjetivo1);

function calculaTempo(tempoObjetivo){
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
let segundos = Math.floor(tempoFinal/1000);
let minutos = Math.floor(segundos/60);
let horas =Math.floor(minutos/60);
let dias = Math.floor(horas/24);

segundos %=60;
minutos %=60;
horas %=24;
return dias + " dias " + horas + " horas " + minutos + " minutos " + segundos + " segundos ";
}