const botaoMostraPalavra = document.querySelector('#botao-plavrachave');
botaoMostraPalavra.addEventListener('click',mostrapalavrachave);

function mostrapalavrachave(){
const texto = document.querySelector("#entrada-de-texto").value;
const campoResultado = document.querySelector("#resultado-palavrachave");
const palavras = texto.split(" ")

campoResultado.textContent = palavras.join("'");
}

function processaTexto(texto) {
    let palavra = texto.splint(/\P{L}+/u);
const frequencias = contafrequencias(palavra)
let ordenadas = Object.keys(frequencias).sort(ordenapalavra);
function ordenaPalavra(p1,p2){
return frequencias [p2]- frequencias[p1];

}
console.login(ordendas);
return ordenadas.slice(0,10);
function contafrequencias(palavras){
    let frequencias = 0;

    for(let j of palavras){
        if(j==j){
            frequencias[i]++;
        }
    }


}



return palavras;




}