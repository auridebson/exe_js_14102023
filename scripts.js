const btnMudaCor = document.querySelector("#btnMudaCor")
const btnMostrar = document.querySelector("#btnMostrar")
const btnOcultar = document.querySelector("#btnOcultar")
const btnAlternar = document.querySelector("#btnAlternar")

const containerWinwidthRes = document.querySelector("#container-winwidth-resultado")
const containerButtonsManipulation = document.querySelector("#container-buttons-manipulation")
const containerButtonsManipulationCtrl = document.querySelector("#container-buttons-manipulation")

const mudaCor500 = () => {
    let winWidth = window.innerWidth
    if (window.innerWidth > 500) {
        containerWinwidthRes.style.backgroundColor = "#ff000067"
    } else {
        containerWinwidthRes.style.backgroundColor = "#53e82e68"
    }
}

const divChange = (visible) => {

    if (visible === false) {
        containerButtonsManipulation.style.visibility = "visible"
    } else if{
        containerButtonsManipulation.style.visibility = "hidden"
    }
}




btnMudaCor.addEventListener("click", mudaCor500)
btnMostrar.addEventListener("click", divChange(true))
btnOcultar.addEventListener("click", divChange(false))
btnAlternar.addEventListener("click", divChange)