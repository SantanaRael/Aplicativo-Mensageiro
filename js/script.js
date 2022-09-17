let conversa = document.querySelector("#cvsToggle");
let mensagem = document.querySelector("#msgToggle");
let chat = document.querySelector(".chat");
let contatos = document.querySelector(".mensagens");


conversa.addEventListener("click", function(){
    contatos.style.display="none"
    chat.style.display="block"
    chat.style.width="100vw"
    conversa.style.backgroundColor="#C5C5FF";
    mensagem.style.backgroundColor="#ffffff";
});

mensagem.addEventListener("click", function(){
    mensagem.style.backgroundColor="#C5C5FF";
    conversa.style.backgroundColor="#ffffff";
    chat.style.display="none"
    contatos.style.display="block"
    contatos.style.width="100vw"
});

