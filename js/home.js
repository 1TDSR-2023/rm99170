const elementoBemVindo = document.querySelector("#welcome");

//RECUPERANDO O OBJETO DO LOCAL STORAGE
const usuarioValidado = JSON.parse(localStorage.getItem("user-validado"));

elementoBemVindo.innerHTML = usuarioValidado.nomeCompleto;