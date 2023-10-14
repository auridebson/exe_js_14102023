const btnMudaCor = document.querySelector("#btnMudaCor")
const btnMostrar = document.querySelector("#btnMostrar")
const btnOcultar = document.querySelector("#btnOcultar")
const btnAlternar = document.querySelector("#btnAlternar")

const containerWinwidthRes = document.querySelector("#container-winwidth-resultado")
const containerButtonsManipulation = document.querySelector("#container-buttons-manipulation")
const containerButtonsManipulationCtrl = document.querySelector("#container-buttons-manipulation")

let divVisibility = false 

const mudaCor500 = () => {
    let winWidth = window.innerWidth
    if (window.innerWidth > 500) {
        containerWinwidthRes.style.backgroundColor = "#ff000067"
    } else {
        containerWinwidthRes.style.backgroundColor = "#53e82e68"
    }
}

const divChange = (vis) => {
    if (vis === 1) {
        divVisibility = true
        containerButtonsManipulation.style.visibility = "visible"    
    } else
    if (vis === 2) {
        divVisibility = false
        containerButtonsManipulation.style.visibility = "hidden" 
    }
    if (vis === 3) {
        if (divVisibility === true) {
            divVisibility = !divVisibility
            containerButtonsManipulation.style.visibility = "hidden" 
        } else {
            divVisibility = !divVisibility
            containerButtonsManipulation.style.visibility = "visible" 
        }

    }

}



btnMudaCor.addEventListener("click", mudaCor500)
btnMostrar.addEventListener("click", () => divChange(1))
btnOcultar.addEventListener("click",  () => divChange(2))
btnAlternar.addEventListener("click", () => divChange(3))