

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"  

let btnEncriptar = document.querySelector(".btn-encriptar");
let btnDesencrytar = document.querySelector(".btn-desencriptar");
let btnCopy = document.querySelector("#btn-copy");
let decodificado = document.querySelector("#decodificador")



btnEncriptar.onclick = encriptar
btnDesencrytar.onclick = desencriptar
btnCopy.onclick = copiar

function desencriptar() {
    boxfront();
    decodificado.textContent = desencriptarText(inputText());
}


function encriptar() {
    boxfront();
    decodificado.textContent = encriptarText(inputText());
}

function copiar() {

    let decodificado = document.querySelector("#decodificador").innerHTML;
    document.getElementById("input-text").value = "";

    navigator.clipboard.writeText(decodificado)
        .then(() => {
            console.log("Text copied to clipboard...")
        })
        .catch(err => {
            console.log('Something went wrong', err);
        })
}

function boxfront() {
    document.getElementById("box-front").style.display = "none";
    document.getElementById("box-back").style.display = "flex";
}

function inputText() {
    let textoEncriptar = document.getElementById("input-text");
    return textoEncriptar.value;
}

function encriptarText(mensaje) {


    let msj = mensaje;
    let textoEncriptado = "";

    for (let i = 0; i < msj.length; i++) {

        if (msj[i] == "a") {
            textoEncriptado = textoEncriptado + "ai"
        }

        else if (msj[i] == "e") {
            textoEncriptado = textoEncriptado + "enter"
        }

        else if (msj[i] == "i") {
            textoEncriptado = textoEncriptado + "imes"
        }

        else if (msj[i] == "o") {
            textoEncriptado = textoEncriptado + "ober"
        }

        else if (msj[i] == "u") {
            textoEncriptado = textoEncriptado + "ufat"
        }

        else {
            textoEncriptado = textoEncriptado + msj[i]
        }

    }

    return textoEncriptado;
}


function desencriptarText(mensaje) {


    let msj = mensaje;
    let textoDesencriptado = "";

    for (let i = 0; i < msj.length; i++) {

        if (msj[i] == "a") {
            textoDesencriptado = textoDesencriptado + "a"
            i = i + 1
        }

        else if (msj[i] == "e") {
            textoDesencriptado = textoDesencriptado + "e"
            i = i + 4
        }

        else if (msj[i] == "i") {
            textoDesencriptado = textoDesencriptado + "i"
            i = i + 3
        }

        else if (msj[i] == "o") {
            textoDesencriptado = textoDesencriptado + "o"
            i = i + 3
        }

        else if (msj[i] == "u") {
            textoDesencriptado = textoDesencriptado + "u"
            i = i + 3
        }

        else {
            textoDesencriptado = textoDesencriptado + msj[i]
        }

    }

    return textoDesencriptado;
}














