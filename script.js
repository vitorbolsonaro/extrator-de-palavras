const botaoMostraPalavra = document.querySelector('#botao-plavrachave');
botaoMostraPalavra.addEventListener('click',mostrapalavrachave);

function mostrapalavrachave(){
const texto = document.querySelector("#entrada-de-texto").value;
const campoResultado = document.querySelector("#resultado-palavrachave");
const palavras = texto.split(" ")

campoResultado.textContent = palavras.join("'");
}