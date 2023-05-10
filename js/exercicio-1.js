
let botao = document.getElementById("botao");   

botao.addEventListener("click", function () {

 let r = 0;
 let g = 0;
 let b = 0;

 r = Math.round(Math.random() * 255);
 g = Math.round(Math.random() * 255);
 b = Math.round(Math.random() * 255);

    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;

});

let aux = 0;

let imgTtt = document.getElementById("img-ttt");
imgTtt.addEventListener("click", function(){
    if(aux > 4) 
    aux = 0;
    let img = document.getElementById("img");
    

    const imgArray = ["./img/lobo1.jpg", "./img/lobo2.jpg", "./img/lobo3.jpg","./img/lobo4.jpg", "./img/lobo5.jpg", "./img/lobo6.jpg"];

    
    let imgUrl = img.setAttribute("src", `${imgArray[aux]}`);
    aux++;

});


hideBtn.addEventListener("click", function(){
    
let div = document.getElementById("img-vvv");
    
    if(div.style.display === "none"){
        div.style.display = "block";
    }
    else{   
        div.style.display = "none";
    }

}); 

btnList.addEventListener("click", function(){
    let value = txt.value;
    const newItem = document.createElement("li");
    newItem.innerText = value;
    list.appendChild(newItem);
    txt.value = "";
})



