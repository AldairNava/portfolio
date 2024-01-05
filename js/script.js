
const menuOpciones = document.querySelector(".menu-opciones");
const btncontacto = document.getElementById("contacto");
const header = document.querySelector("header");
const controlesUsuario = document.querySelector(".controles-usuario");
const contenedor = document.querySelector(".contenedor");
const btnMenu = document.getElementById("btn-menu");
const btncv = document.getElementById("btncv")
const btnport = document.getElementById("portfolio")

const responsiveY = ()=>{
    if(window.innerHeight<=362){
        if(menuOpciones.classList.contains("mostrar"))
            menuOpciones.classList.add("min");
        else
            menuOpciones.classList.remove("min");
    }
    else{
        menuOpciones.classList.remove("min");
    }
};
const responsive = ()=>{
    if(window.innerWidth<=1150){
        menuOpciones.children[0].appendChild(btncontacto);
        menuOpciones.children[0].appendChild(btncv);
        menuOpciones.children[0].appendChild(btnport);
        header.appendChild(menuOpciones);
    }else{
        controlesUsuario.appendChild(btncontacto);
        controlesUsuario.appendChild(btncv);
        controlesUsuario.appendChild(btnport);
        contenedor.appendChild(menuOpciones);
    }

    responsiveY();
}

btnMenu.addEventListener("click",()=>{
    menuOpciones.classList.toggle("mostrar");
    responsiveY();
});
responsive();

window.addEventListener("resize",responsive);