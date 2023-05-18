const inputEmail = document.querySelector("#idEmail");

inputEmail.addEventListener("keyup", ()=>{

    const lblEmail = document.querySelector("label[for='idEmail']");

    if(inputEmail.value.length < 5){
        inputEmail.setAttribute("style", "outline-color:#ff0000");
        lblEmail.setAttribute("style", "color:#ff0000");
    }else{
        inputEmail.setAttribute("style", "outline-color:#00ff00");
        lblEmail.setAttribute("style", "color:#00ff00");
    }


});

const inputSenha = document.querySelector("#idPass");
const eyePass = document.querySelector(".fa");
eyePass.addEventListener("click", ()=>{


    if(inputSenha.getAttribute("type") == "password"){
        inputSenha.setAttribute("type","text");
        eyePass.setAttribute("class","fa fa-eye-slash");
    }else{
        inputSenha.setAttribute("type","password");
        eyePass.setAttribute("class","fa fa-eye");

    }

});

//objeto

// const usuario1 = {
//     nomeCompleto : "José das Couves",
//     emailUsuario : "jose@gmail.com",
//     senhaUsuario : "123456"
// }

// const usuario2 = {
//     nomeCompleto : "Juan Pelego",
//     emailUsuario : "juan@gmail.com",
//     senhaUsuario : "123456"
// }

//Lista de objetos/usuários
// let listaDeUsuarios = [];
// listaDeUsuarios.push(usuario1);
// listaDeUsuarios.push(usuario2);


//Lista de objetos/usuários
let listaDeUsuarios = [
    {
        nomeCompleto : "José das Couves",
        emailUsuario : "jose@gmail.com",
        senhaUsuario : "123456"
    }
    ,
    {
        nomeCompleto : "Juan Pelego",
        emailUsuario : "juan@gmail.com",
        senhaUsuario : "123456"
    }
    ,
    {
        nomeCompleto : "Caio Tulipa",
        emailUsuario : "tulipa@gmail.com",
        senhaUsuario : "123456"
    }
    ,
    {
        nomeCompleto : "Derick Gouvea",
        emailUsuario : "dede@gmail.com",
        senhaUsuario : "123456"
    }
    ,
    {
        nomeCompleto : "Matheuzim Danado",
        emailUsuario : "mateu@gmail.com",
        senhaUsuario : "123456"
    }
    ,
    {
        nomeCompleto : "Leunardo Camacho",
        emailUsuario : "leleu@gmail.com",
        senhaUsuario : "123456"
    }

];





const botaoSubmit = document.querySelector("#btnSubmit");

botaoSubmit.addEventListener("click", ()=>{

    //Criandoo um objeto de validação
    let userValidado = {
        emailUsuarioValidado : inputEmail.value,
        senhaUsuarioValidado : inputSenha.value
    }

    //Criando uma  iteração com a lista de objetos para realizar a validação com o usuarioValidado

try{
    listaDeUsuarios.forEach((usuario)=>{
        //Realizando a validação
        //Comparando cada objeto da lista com o objeto montado com os dados da lista

        if(userValidado.emailUsuarioValidado == usuario.emailUsuario && userValidado.senhaUsuarioValidado == usuario.senhaUsuario){
            userValidado = usuario;
            throw "VALIDADO";
        }
    });

    throw "SENHA OU NOME DE USUÁRIO INVÁLIDOS"

}catch(msg){

    const msgStatus = document.querySelector("#msgStatus");

    if(msg == "VALIDADO"){
        msgStatus.setAttribute("style","color:#00ff00")
        msgStatus.innerHTML = `<span><strong>Usuário:${userValidado.nomecompleto} Login efetuado com sucesso!</strong></span>`;

        //Redirect
        setTimeout(()=>{

            window.location.href="../home.html";

        }, 3000);


    }else{
        msgStatus.setAttribute("style","color:#ff0000")
        msgStatus.innerHTML = "<span><strong>Nome de usuário ou senha inválido!</strong></span>";
    }

}


});