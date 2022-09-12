let nombre = document.getElementById("nombre")
let nb = 0


function add() {
    nombre.innerHTML = nb
    nb++
}

function remove() {
    nombre.innerHTML = nb
    nb--
}

function reset() {
    nombre.innerHTML = 0
    nb = 0
}
