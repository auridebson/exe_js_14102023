const btnMudaCor = document.querySelector("#btnMudaCor")
const containerWinwidthRes = document.querySelector("#container-winwidth-resultado")

const mudaCor500 = () => {
    let winWidth = window.innerWidth
    if (window.innerWidth > 500) {
        containerWinwidthRes.style.backgroundColor = "#ff000067"
    } else {
        containerWinwidthRes.style.backgroundColor = "#53e82e68"
    }
}





btnMudaCor.addEventListener("click", mudaCor500)