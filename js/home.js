const elementoBemVindo = document.querySelector("#welcome");

//RECUPERANDO O OBJETO DO LOCAL STORAGE
const usuarioValidado = JSON.parse(localStorage.getItem("user-validado"));

elementoBemVindo.innerHTML = usuarioValidado.nomeCompleto;

if(localStorage.getItem("user-token")){
    const elementoBemVindo = document.querySelector("#welcome");

    //recuperando o objeto do local/storage
    const usuarioValidado = JSON.parse(localStorage.getItem("user-validado"));

    elementoBemVindo.innerHTML = usuarioValidado.nomeCompleto;

    const botaoSair = document.querySelector("#btnSair");
    botaoSair.addEventListener("click", ()=>{
        localStorage.removeItem("user-token")
        localStorage.removeItem("user-validado")
        window.location.href ="../login.html";
    }) 

}else{
    alert("Você precisa estar logado")
    window.location.href ="../login.html";
}


