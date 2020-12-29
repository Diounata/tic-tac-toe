var resultado = [document.querySelector('td.r1'), document.querySelector('td.r2'), document.querySelector('td.r3'), document.querySelector('td.r4'), document.querySelector('td.r5'), document.querySelector('td.r6'), document.querySelector('td.r7'), document.querySelector('td.r8'), document.querySelector('td.r9')]
var casa_preenchida = [0, 0, 0, 0, 0, 0, 0, 0, 0]
var rodada = [1, 'X', 'O']

// Preencher casas
function preencher_casa(n) {
    if (casa_preenchida[n] == 0) {
        if (rodada[0] == 1) {
            resultado[n].innerHTML = `${rodada[1]}`
            resultado[n].className += ' text-primary'
            casa_preenchida[n] = 1
            rodada[0] = 2
        } else {
            resultado[n].innerHTML = `${rodada[2]}`
            resultado[n].className += ' text-danger'
            casa_preenchida[n] = 2
            rodada[0] = 1
        }
    }

    // Verificar se o jogo empatou
    for (t = 0; casa_preenchida[t] > 0; t++) {
        if (t == 8) {
            div_resultado.innerHTML += `Empate`
        }
    }
}

// Verificar se algum jogador venceu a rodada
function verificar_resultado() {
    // Verificar eixo x
    if ((casa_preenchida[0] == 1 && casa_preenchida[1] == 1 && casa_preenchida[2] == 1) || (casa_preenchida[3] == 1 && casa_preenchida[4] == 1 && casa_preenchida[5] == 1) || (casa_preenchida[6] == 1 && casa_preenchida[7] == 1 && casa_preenchida[8] == 1)) {
        div_resultado.innerHTML = mensagem_vitoria[0]
        placar_valor[0] += 1
        placar_div[0].innerHTML = `${placar_valor[0]}`
    } else if ((casa_preenchida[0] == 2 && casa_preenchida[1] == 2 && casa_preenchida[2] == 2) || (casa_preenchida[3] == 2 && casa_preenchida[4] == 2 && casa_preenchida[5] == 2) || (casa_preenchida[6] == 2 && casa_preenchida[7] == 2 && casa_preenchida[8] == 2)) {
        div_resultado.innerHTML = mensagem_vitoria[1]
        placar_valor[1] += 1
        placar_div[1].innerHTML = `${placar_valor[1]}`
    }

    // Verificar eixo y
    if ((casa_preenchida[0] == 1 && casa_preenchida[3] == 1 && casa_preenchida[6] == 1) || (casa_preenchida[1] == 1 && casa_preenchida[4] == 1 && casa_preenchida[7] == 1) || (casa_preenchida[2] == 1 && casa_preenchida[5] == 1 && casa_preenchida[8] == 1)) {
        div_resultado.innerHTML = mensagem_vitoria[0]
        placar_valor[0] += 1
        placar_div[0].innerHTML = `${placar_valor[0]}`
    } else if ((casa_preenchida[0] == 2 && casa_preenchida[3] == 2 && casa_preenchida[6] == 2) || (casa_preenchida[1] == 2 && casa_preenchida[4] == 2 && casa_preenchida[7] == 2) || (casa_preenchida[2] == 2 && casa_preenchida[5] == 2 && casa_preenchida[8] == 2)) {
        div_resultado.innerHTML = mensagem_vitoria[1]
        placar_valor[1] += 1
        placar_div[1].innerHTML = `${placar_valor[1]}`
    }

    // Verificar eixo da diagonal
    if ((casa_preenchida[0] == 1 && casa_preenchida[4] == 1 && casa_preenchida[8] == 1) || (casa_preenchida[2] == 1 && casa_preenchida[4] == 1 && casa_preenchida[6] == 1)) {
        div_resultado.innerHTML = mensagem_vitoria[0]
        placar_valor[0] += 1
        placar_div[0].innerHTML = `${placar_valor[0]}`
    } else if ((casa_preenchida[0] == 2 && casa_preenchida[4] == 2 && casa_preenchida[8] == 2) || (casa_preenchida[2] == 2 && casa_preenchida[4] == 2 && casa_preenchida[6] == 2)) {
        div_resultado.innerHTML = mensagem_vitoria[1]
        placar_valor[1] += 1
        placar_div[1].innerHTML = `${placar_valor[1]}`
    }
}

// Funções para preencher a casa e verificar o resultado
function casa1() {
    preencher_casa(0)
    verificar_resultado()
}

function casa2() {
    preencher_casa(1)
    verificar_resultado()
}

function casa3() {
    preencher_casa(2)
    verificar_resultado()
}

function casa4() {
    preencher_casa(3)
    verificar_resultado()
}

function casa5() {
    preencher_casa(4)
    verificar_resultado()
}

function casa6() {
    preencher_casa(5)
    verificar_resultado()
}

function casa7() {
    preencher_casa(6)
    verificar_resultado()
}

function casa8() {
    preencher_casa(7)
    verificar_resultado()
}

function casa9() {
    preencher_casa(8)
    verificar_resultado()
}


// Determinar quem venceu o jogo
let div_resultado = document.querySelector('div.div-resultado')
let mensagem_vitoria = ['Jogador 1 venceu', 'Jogador 2 venceu']
let placar_valor = [0, 0]
let placar_div = [document.querySelector('span.placar-jogador1'), document.querySelector('span.placar-jogador2')]