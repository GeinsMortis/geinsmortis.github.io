let temaEscuro = false;

document.getElementById('checkTema').addEventListener('click', function () {
    let corpo = document.getElementById('temaDark');

    let textTitle = document.getElementById('textTema');


    if (!temaEscuro) {

        corpo.style.backgroundColor = "#FFF";
        corpo.style.color = "#000";
        textTitle.innerHTML = "Tema Escuro";
        temaEscuro = true;
    } else {
        corpo.style.backgroundColor = "#000";
        corpo.style.color = "#FFF";
        textTitle.innerHTML = "Tema Claro"
        temaEscuro = false;
    }


});