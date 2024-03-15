var botao = document.getElementById("botao");
botao.addEventListener("click", alertar, false);
var nome = document.getElementById("nome");

function alertar(event){
    alert("Você clicou no botão!!! " + " " + nome.value);

    var numero = 6;
    var resultedo = numero % 2;
    if(resultado == 0){
        alert("este número é par!");
    }
}  