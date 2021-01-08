var resultado = [document.querySelector('td.r1'), document.querySelector('td.r2'), document.querySelector('td.r3'), document.querySelector('td.r4'), document.querySelector('td.r5'), document.querySelector('td.r6'), document.querySelector('td.r7'), document.querySelector('td.r8'), document.querySelector('td.r9')]
var casa_preenchida = [0, 0, 0, 0, 0, 0, 0, 0, 0]
var rodada = [1, 'X', 'O']
let div_nome_jogadores = [document.querySelector('div.nome_jogador_1'), document.querySelector('div.nome_jogador_2')]


// Adicionar nome dos jogadores
function add_jogadores() {
    sessionStorage.setItem("nome_jogador_1", document.querySelector('input.nome_jogador_1').value)
    sessionStorage.setItem("nome_jogador_2", document.querySelector('input.nome_jogador_2').value)
}

window.addEventListener('load', function add_nick() {
    vez_jogador.innerHTML = `• Vez de ${sessionStorage.getItem("nome_jogador_1")} (<span class="text-primary mx-1">X</span>)`
    div_nome_jogadores[0].innerHTML = sessionStorage.getItem("nome_jogador_1")
    div_nome_jogadores[1].innerHTML = sessionStorage.getItem("nome_jogador_2")
    placar_div[0].innerHTML = `${placar_valor[0]}`
    placar_div[1].innerHTML = `${placar_valor[1]}`
});

// Vez do jogador
var vez_jogador = document.querySelector('div.verificar-vez-jogador')
function verificar_vez_jogador() {
    if (rodada[0] == 1) {
        vez_jogador.innerHTML = `• Vez de ${sessionStorage.getItem("nome_jogador_1")} (<span class="text-primary mx-1">X</span>)`
    } else {
        vez_jogador.innerHTML = `• Vez de ${sessionStorage.getItem("nome_jogador_2")} (<span class="text-danger mx-1">O</span>)`
    }
}


// Preencher casas
let final_rodada = false
function preencher_casa(n) {
    if (final_rodada == true) {
        vez_jogador = ``
    } else if (final_rodada == false) {
        if (casa_preenchida[n] == 0) {
            if (rodada[0] == 1) {
                resultado[n].innerHTML = `${rodada[1]}`
                resultado[n].classList.add('text-primary')
                resultado[n].classList.remove('text-danger')
                casa_preenchida[n] = 1
                rodada[0] = 2
            } else {
                resultado[n].innerHTML = `${rodada[2]}`
                resultado[n].classList.add('text-danger')
                resultado[n].classList.remove('text-primary')
                casa_preenchida[n] = 2
                rodada[0] = 1
            }
        }
    }
}

// Fim da rodada
let div_resultado = document.querySelector('div.div-resultado')
let mensagem_vitoria = [
    `<div class="my-2"> ${sessionStorage.getItem("nome_jogador_1")} venceu a rodada </div>`,
    `<div class="my-2"> ${sessionStorage.getItem("nome_jogador_2")} venceu a rodada </div>`
]

let placar_valor = [0, 0]
let placar_div = [document.querySelector('span.placar-jogador1'), document.querySelector('span.placar-jogador2')]


function comecar_novo_jogo() {
    for (t in resultado) {
        resultado[t].innerHTML = ''
    }
    rodada[0] = rodada[0] == 1 ? rodada[0] = 2 : rodada[0] = 1
    final_rodada = false
    div_resultado.innerHTML = ``
    if (rodada[0] == 1) {
        vez_jogador.innerHTML = `• Vez de ${sessionStorage.getItem("nome_jogador_1")} (<span class="text-primary mx-1">X</span>)`
    } else {
        vez_jogador.innerHTML = `• Vez de ${sessionStorage.getItem("nome_jogador_2")} (<span class="text-danger mx-1">O</span>)`
    }
}

function fim_rodada(p) {
    for (t in casa_preenchida) {
        casa_preenchida[t] = 0
    }

    div_resultado.innerHTML = mensagem_vitoria[p]
    placar_valor[p] += 1
    placar_div[p].innerHTML = `${placar_valor[p]}`
    div_resultado.innerHTML += `
        <button href="index.html" class="btn btn-outline-primary rounded-pill" onclick="comecar_novo_jogo()"> Começar próxima rodada </button>
    `
    vez_jogador.innerHTML = ``
    final_rodada = true
}

function vitoria_x() {
    fim_rodada(0)
}

function vitoria_o() {
    fim_rodada(1)
}

// Verificar se algum jogador venceu a rodada
function verificar_resultado() {
    // Verificar eixo x
    if ((casa_preenchida[0] == 1 && casa_preenchida[1] == 1 && casa_preenchida[2] == 1) || (casa_preenchida[3] == 1 && casa_preenchida[4] == 1 && casa_preenchida[5] == 1) || (casa_preenchida[6] == 1 && casa_preenchida[7] == 1 && casa_preenchida[8] == 1)) {
        vitoria_x()
    } else if ((casa_preenchida[0] == 2 && casa_preenchida[1] == 2 && casa_preenchida[2] == 2) || (casa_preenchida[3] == 2 && casa_preenchida[4] == 2 && casa_preenchida[5] == 2) || (casa_preenchida[6] == 2 && casa_preenchida[7] == 2 && casa_preenchida[8] == 2)) {
        vitoria_o()
    }

    // Verificar eixo y
    if ((casa_preenchida[0] == 1 && casa_preenchida[3] == 1 && casa_preenchida[6] == 1) || (casa_preenchida[1] == 1 && casa_preenchida[4] == 1 && casa_preenchida[7] == 1) || (casa_preenchida[2] == 1 && casa_preenchida[5] == 1 && casa_preenchida[8] == 1)) {
        vitoria_x()
    } else if ((casa_preenchida[0] == 2 && casa_preenchida[3] == 2 && casa_preenchida[6] == 2) || (casa_preenchida[1] == 2 && casa_preenchida[4] == 2 && casa_preenchida[7] == 2) || (casa_preenchida[2] == 2 && casa_preenchida[5] == 2 && casa_preenchida[8] == 2)) {
        vitoria_o()
    }

    // Verificar eixo da diagonal
    if ((casa_preenchida[0] == 1 && casa_preenchida[4] == 1 && casa_preenchida[8] == 1) || (casa_preenchida[2] == 1 && casa_preenchida[4] == 1 && casa_preenchida[6] == 1)) {
        vitoria_x()
    } else if ((casa_preenchida[0] == 2 && casa_preenchida[4] == 2 && casa_preenchida[8] == 2) || (casa_preenchida[2] == 2 && casa_preenchida[4] == 2 && casa_preenchida[6] == 2)) {
        vitoria_o()
    }

    // Verificar se o jogo empatou
    for (t = 0; casa_preenchida[t] > 0; t++) {
        if (t == 8) {
            div_resultado.innerHTML += `
                Empate <br>
                <button href="index.html" class="btn btn-outline-primary rounded-pill" onclick="comecar_novo_jogo()"> Começar próxima rodada </button>
            `
            vez_jogador.innerHTML = ``
            final_rodada = true
        }
    }
}


// Funções para preencher a casa, verificar a vez do jogador e o resultado
function casa1() {
    preencher_casa(0)
    verificar_vez_jogador()
    verificar_resultado()
}

function casa2() {
    preencher_casa(1)
    verificar_vez_jogador()
    verificar_resultado()
}

function casa3() {
    preencher_casa(2)
    verificar_vez_jogador()
    verificar_resultado()
}

function casa4() {
    preencher_casa(3)
    verificar_vez_jogador()
    verificar_resultado()
}

function casa5() {
    preencher_casa(4)
    verificar_vez_jogador()
    verificar_resultado()
}

function casa6() {
    preencher_casa(5)
    verificar_vez_jogador()
    verificar_resultado()
}

function casa7() {
    preencher_casa(6)
    verificar_vez_jogador()
    verificar_resultado()
}

function casa8() {
    preencher_casa(7)
    verificar_vez_jogador()
    verificar_resultado()
}

function casa9() {
    preencher_casa(8)
    verificar_vez_jogador()
    verificar_resultado()
}