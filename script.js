const lampada = document.querySelector(".lampada");

lampada.addEventListener("mouseover", () => {
    if(!lampada.classList.contains("quebrada")){
        lampada.src = "img/lampada-acesa.jpg";
    }
       
});


lampada.addEventListener("mouseout", () => {

    if(!lampada.classList.contains("quebrada")){
        lampada.src = "img/lampada-apagada.jpg";
   }
        
       
});


lampada.addEventListener("click", () => {
    if(!lampada.classList.contains("quebrada")){
         lampada.src =  "img/lampada-quebrada.jpg";
         lampada.classList.remove("quebrada");
    }
       
});


lampada.addEventListener("dblclick", () => {
    if(!lampada.classList.contains("quebrada")){
         lampada.src =  "img/lampada-quebrada.jpg";
    }
       
});