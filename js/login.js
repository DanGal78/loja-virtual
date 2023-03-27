
"use strict";

function validaFormulario(){
    var formulario = document.forms["login"];    
    var senha = formulario["senha"];
      var contadorDeErros = 0;

        
    if(senha.value.length < 8){
        setErro("senha", senha, "A senha precisa ter no mínimo 8 caracateres")
        addLimpaErroParaInputs(senha);
        
        contadorDeErros++;
    }
    if(contadorDeErros > 0){
        return false;
    }
    return true;

}
function limpaErro(id){
    var input = document.getElementById(id);
    var mensagem = document.getElementsByClassName(`message-error ${id}`)[0];
    input.classList.remove("input-error");
    mensagem.innerHTML = "";
}
function addLimpaErroParaInputs(input){
    input.addEventListener("input", function(evento){
        limpaErro(evento.target.id)
    })
}

function setErro(messageClass, input, mensagem = ""){
var mensagemBox = document.getElementsByClassName(`message-error ${messageClass}`)[0];
    mensagemBox.innerHTML = mensagem;
    input.classList.add("input-error");
}
