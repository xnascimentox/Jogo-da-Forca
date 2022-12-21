const frutas = ["pitaia", "manga", "pinha", "tomate", "framboesa"];

const palavraSecreta = frutas [Math.floor(Math.random() * frutas.length)]

const letrasErradas = [];

const mostrasLestrasCorretas = [];

document.addEventListener("keydown", (evento ) => {
    const codigo = evento.keycode;
    if(isLetra(codigo)){
        const letra = evento.key;
        if(letrasErradas.includes(letra)){
            mostrarAvisoLetraRepetida();
        }else{
            if(palavraSecreta.includes(letra)){
                mostrasLestrasCorretas.push(letra);
            }else{
                letrasErradas.push(letra);
            }
        }
        atualizarJogo();
    }
})

function atualizarJogo(){
    mostrarLestrasErradas();
    mostrasLestrasCorretas();
    desenharForca();
}

function mostrarLestrasErradas(){
    const div = document.querySelector(".letras-erradas-container");
    div.innerHTML = "<h3>Letras erradas</h3>";
    letrasErradas.forEach(letra => {
        div.innerHTML += `<span>${letra}</span>`;
    });
}

function mostrasLestrasCertas() {
    const container = document.querySelector(".palavra-secreta-container");
    container.innerHTML = "";
    palavraSecreta.split("").forEach(letra => {
        if(lettraCorretas.includes(letra)){
            container.innerHTML += `<span>${letra}</span>`;
        }else{
            container.innerHTML += `<span>_</span>`
        }
        
    })
}

function desenharForca() {
    const partesCorpo = document.querySelectorAll(".forca-parte");
    for (let i = 0; i < letrasErradas.length; i++) {
      partesCorpo[i].style.display = "block";
    }
  }


function mostrarAvisoLetraRepetida(){
    const aviso = document.querySelector(".aviso-palavra-repetida");
    aviso.classList.add("show");
    setTimeout(() => {
        aviso.classList.remove("show");
    }, 5000);
}
function isLetra(codigo){
    return codigo >= 65 && codigo <= 90;

}