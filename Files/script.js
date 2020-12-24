var resultado = [document.getElementById('r1'), document.getElementById('r2'), document.getElementById('r3'), document.getElementById('r4'), document.getElementById('r5'), document.getElementById('r6'), document.getElementById('r7'), document.getElementById('r8'), document.getElementById('r9')]
var casa_preenchida = [0, 0, 0, 0, 0, 0, 0, 0, 0]
var rodada = [1, 'x', 'y']
var rodada_vezjogador = [0, 1]

function rodada_x() {
    if (rodada[0] == 1) {
        rodada[0] *= -1
    }
}


function casa1() {
    if (casa_preenchida[0] == 0) {
        resultado[0].innerHTML = `${rodada[]}`
        casa_preenchida[0] = 1
    }
}

function casa2() {
    if (casa_preenchida[1] == 0) {
        resultado[1].innerHTML = `${}`
        casa_preenchida[1] = 1
    }
}

function casa3() {
    if (casa_preenchida[2] == 0) {
        resultado[2].innerHTML = `${}`
        casa_preenchida[2] = 1
    }
}

function casa4() {
    if (casa_preenchida[3] == 0) {
        resultado[3].innerHTML = `${}`
        casa_preenchida[3] = 1
    }
}

function casa5() {
    if (casa_preenchida[4] == 0) {
        resultado[4].innerHTML = `${}`
        casa_preenchida[4] = 1
    }
}

function casa6() {
    if (casa_preenchida[5] == 0) {
        resultado[5].innerHTML = `${}`
        casa_preenchida[5] = 1
    }
}

function casa7() {
    if (casa_preenchida[6] == 0) {
        resultado[6].innerHTML = `${}`
        casa_preenchida[6] = 1
    }
}

function casa8() {
    if (casa_preenchida[7] == 0) {
        resultado[7].innerHTML = `${}`
        casa_preenchida[7] = 1
    }
}

function casa9() {
    if (casa_preenchida[8] == 0) {
        resultado[8].innerHTML = `${}`
        casa_preenchida[8] = 1
    }
}