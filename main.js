//home menu
let menuVisible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menuVisible==false){
        menu.style.display = "block";
        menuVisible = true; 
    }else{
        menu.style.display = "none";
        menuVisible = false;
    }
}

let links = document.querySelectorAll("nav a");
for(let i = 0; i < links.length;i++){
    links[i].onclick = function(){
        menu.style.display = "none";
        menuVisible = false;
    }
}

