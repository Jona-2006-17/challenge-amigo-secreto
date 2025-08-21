// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

let inputAmigo = document.getElementById("amigo");

function agregarAmigo(){
    if(inputAmigo.value===""){
        alert("por favor ingrese un nombre");
        return;
    };
    
    if(amigos.includes(inputAmigo.value.trim())){
        alert("Evita confuciones ingresa otro nombre u apellido para distinguir");
        return;
    }

    amigos.push(inputAmigo.value);
    inputAmigo.value = "";
    console.log(amigos);
    mostrarEnLaLista();
}

let listado = document.getElementById("listaAmigos");
function mostrarEnLaLista(){
    listado.innerHTML="";
    for(let i=0; i<amigos.length; i++){
        let li = document.createElement('li');
        li.textContent = amigos[i];
        listado.appendChild(li)
    }
}

function sortearAmigos(){
    if(amigos.length<2){
        alert("debe haber al menos 2 amigos para sortear");
        return;
    };
    
    let amigoSecreto = Math.floor(Math.random()*amigos.length);
    listado.innerHTML = ""
    let li2 = document.createElement('li');
    li2.textContent = amigos[amigoSecreto];
    listado.appendChild(li2);
    console.log(amigoSecreto)
    console.log(amigos[amigoSecreto])
}