function titleGreen() {
    let changeTitleGreen = document.getElementById("title_green");
    let returnTitleGreen = document.getElementById("title_green")
    changeTitleGreen.onmouseover = function () {
        changeTitleGreen.innerHTML = "Faça sua parte, Save the World"
    }
    returnTitleGreen.onmouseout = () => {
        changeTitleGreen.innerHTML = "Bem vindo a GreenSave"
    }
}

titleGreen()

function buttonGreen() {
    let changeColorButton = document.getElementById("buttonform");
    let returnColorButton = document.getElementById("buttonform")
    changeTitleGreen.onmouseover = () => {
        changeColorButton.style.backgroundColor = 'rgb(55, 136, 57)'
    }
    returnColorButton.onmouseout = () => {
        returnColorButton.style.backgroundColor = ''
    }
}

buttonGreen()
