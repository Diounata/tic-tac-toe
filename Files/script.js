var resultado = [document.getElementById('r1'), document.getElementById('r2'), document.getElementById('r3'), document.getElementById('r4'), document.getElementById('r5'), document.getElementById('r6'), document.getElementById('r7'), document.getElementById('r8'), document.getElementById('r9')]
var casa_preenchida = [0, 0, 0, 0, 0, 0, 0, 0, 0]
var rodada = [1, 'X', 'O']

function casa1() {
    if (casa_preenchida[0] == 0) {
        if (rodada[0] == 1) {
            resultado[0].innerHTML = `${rodada[1]}`
            casa_preenchida[0] = 1
            rodada[0] = 2
        } else {
            resultado[0].innerHTML = `${rodada[2]}`
            casa_preenchida[0] = 2
            rodada[0] = 1
        }
    }

    verificar_resultado()
}

function casa2() {
    if (casa_preenchida[1] == 0) {
        if (rodada[0] == 1) {
            resultado[1].innerHTML = `${rodada[1]}`
            casa_preenchida[1] = 1
            rodada[0] = 2
        } else {
            resultado[1].innerHTML = `${rodada[2]}`
            casa_preenchida[1] = 2
            rodada[0] = 1
        }
    }

    verificar_resultado()
}

function casa3() {
    if (casa_preenchida[2] == 0) {
        if (rodada[0] == 1) {
            resultado[2].innerHTML = `${rodada[1]}`
            casa_preenchida[2] = 1
            rodada[0] = 2
        } else {
            resultado[2].innerHTML = `${rodada[2]}`
            casa_preenchida[2] = 2
            rodada[0] = 1
        }
    }

    verificar_resultado()
}

function casa4() {
    if (casa_preenchida[3] == 0) {
        if (rodada[0] == 1) {
            resultado[3].innerHTML = `${rodada[1]}`
            casa_preenchida[3] = 1
            rodada[0] = 2
        } else {
            resultado[3].innerHTML = `${rodada[2]}`
            casa_preenchida[3] = 2
            rodada[0] = 1
        }
    }

    verificar_resultado()
}

function casa5() {
    if (casa_preenchida[4] == 0) {
        if (rodada[0] == 1) {
            resultado[4].innerHTML = `${rodada[1]}`
            casa_preenchida[4] = 1
            rodada[0] = 2
        } else {
            resultado[4].innerHTML = `${rodada[2]}`
            casa_preenchida[4] = 2
            rodada[0] = 1
        }
    }

    verificar_resultado()
}

function casa6() {
    if (casa_preenchida[5] == 0) {
        if (rodada[0] == 1) {
            resultado[5].innerHTML = `${rodada[1]}`
            casa_preenchida[5] = 1
            rodada[0] = 2
        } else {
            resultado[5].innerHTML = `${rodada[2]}`
            casa_preenchida[5] = 2
            rodada[0] = 1
        }
    }

    verificar_resultado()
}

function casa7() {
    if (casa_preenchida[6] == 0) {
        if (rodada[0] == 1) {
            resultado[6].innerHTML = `${rodada[1]}`
            casa_preenchida[6] = 1
            rodada[0] = 2
        } else {
            resultado[6].innerHTML = `${rodada[2]}`
            casa_preenchida[6] = 2
            rodada[0] = 1
        }
    }

    verificar_resultado()
}

function casa8() {
    if (casa_preenchida[7] == 0) {
        if (rodada[0] == 1) {
            resultado[7].innerHTML = `${rodada[1]}`
            casa_preenchida[7] = 1
            rodada[0] = 2
        } else {
            resultado[7].innerHTML = `${rodada[2]}`
            casa_preenchida[7] = 2
            rodada[0] = 1
        }
    }

    verificar_resultado()
}

function casa9() {
    if (casa_preenchida[8] == 0) {
        if (rodada[0] == 1) {
            resultado[8].innerHTML = `${rodada[1]}`
            casa_preenchida[8] = 1
            rodada[0] = 2
        } else {
            resultado[8].innerHTML = `${rodada[2]}`
            casa_preenchida[8] = 2
            rodada[0] = 1
        }
    }

    verificar_resultado()
}


var div = document.getElementById('teste')

function verificar_resultado() {
    // Verificar eixo x
    if ((casa_preenchida[0] == 1 && casa_preenchida[1] == 1 && casa_preenchida[2] == 1) || (casa_preenchida[3] == 1 && casa_preenchida[4] == 1 && casa_preenchida[5] == 1) || (casa_preenchida[6] == 1 && casa_preenchida[7] == 1 && casa_preenchida[8] == 1)) {
        div.innerHTML += `Jogador 1 venceu`
    } else if ((casa_preenchida[0] == 2 && casa_preenchida[1] == 2 && casa_preenchida[2] == 2) || (casa_preenchida[3] == 2 && casa_preenchida[4] == 2 && casa_preenchida[5] == 2) || (casa_preenchida[6] == 2 && casa_preenchida[7] == 2 && casa_preenchida[8] == 2)) {
        div.innerHTML += `Jogador 2 venceu`
    }

    // Verificar eixo y
    if ((casa_preenchida[0] == 1 && casa_preenchida[3] == 1 && casa_preenchida[6] == 1) || (casa_preenchida[1] == 1 && casa_preenchida[4] == 1 && casa_preenchida[7] == 1) || (casa_preenchida[2] == 1 && casa_preenchida[5] == 1 && casa_preenchida[8] == 1)) {
        div.innerHTML += `Jogador 1 venceu`
    } else if ((casa_preenchida[0] == 2 && casa_preenchida[3] == 2 && casa_preenchida[6] == 2) || (casa_preenchida[1] == 2 && casa_preenchida[4] == 2 && casa_preenchida[7] == 2) || (casa_preenchida[2] == 2 && casa_preenchida[5] == 2 && casa_preenchida[8] == 2)) {
        div.innerHTML += `Jogador 2 venceu`
    }

    // Verificar eixo da diagonal
    if ((casa_preenchida[0] == 1 && casa_preenchida[4] == 1 && casa_preenchida[8] == 1) || (casa_preenchida[2] == 1 && casa_preenchida[4] == 1 && casa_preenchida[6] == 1)) {
        div.innerHTML += `Jogador 1 venceu`
    } else if ((casa_preenchida[0] == 2 && casa_preenchida[4] == 2 && casa_preenchida[8] == 2) || (casa_preenchida[2] == 2 && casa_preenchida[4] == 2 && casa_preenchida[6] == 2)) {
        div.innerHTML += `Jogador 2 venceu`
    }
}