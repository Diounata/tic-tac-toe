var casas, casasPreenchidas, rodada, fimRodada, possiveisResultados, divNomeJogadores, divVezJogador, divFimRodada

// + Atribuição de valores de algumas variáveis
casasPreenchidas = ['', '', '', '', '', '', '', '', '']
rodada = 'X'
divVezJogador = document.querySelector('div.divVezJogador')
divFimRodada = document.querySelector('div.divFimRodada')
possiveisResultados = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // X
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Y
    [0, 4, 8], [2, 4, 6]             // D
]
casas = [
    document.querySelector('td.p1'),
    document.querySelector('td.p2'),
    document.querySelector('td.p3'),
    document.querySelector('td.p4'),
    document.querySelector('td.p5'),
    document.querySelector('td.p6'),
    document.querySelector('td.p7'),
    document.querySelector('td.p8'),
    document.querySelector('td.p9'),
]

const jogador = {
    X: {
        nome: sessionStorage.getItem("nomeJogador_X"),
        cor: 'text-primary',
        divPlacar: document.querySelector('span.placarJogador_X'),
        pontuação: 0,
    },
    O: {
        nome: sessionStorage.getItem("nomeJogador_O"),
        cor: 'text-danger',
        divPlacar: document.querySelector('span.placarJogador_O'),
        pontuação: 0,
    },
}

divNomeJogadores = {
    X: document.querySelector('div.nomeJogador_X'),
    O: document.querySelector('div.nomeJogador_O'),
}
// - Atribuição de valores de algumas variáveis


// + Adicionar nome e placar dos jogadores na página
function addNomes() {
    sessionStorage.setItem("nomeJogador_X", document.querySelector('input.inputNome_X').value)
    sessionStorage.setItem("nomeJogador_O", document.querySelector('input.inputNome_O').value)
}

window.addEventListener('load', () => {
    for (pos in divNomeJogadores) {
        divNomeJogadores[pos].innerText = `${jogador[pos].nome}`
        jogador[pos].divPlacar.innerText = `${jogador[pos].pontuação}`
    }

    divVezJogador.innerHTML = `• Vez de ${rodada === 'X' ? `${jogador.X.nome} (<span class="${jogador.X.cor} mx-1">X</span>)` : `${jogador.O.nome} (<span class="${jogador.O.cor} mx-1">O</span>)`}`
});
// - Adicionar nome dos jogadores na página


// + Preencher casas
fimRodada = false
function preencherCasa(n) {
    if (fimRodada === false) {
        if (casasPreenchidas[n] == '') {
            if (rodada == 'X') {
                casas[n].innerHTML = `<span class="${jogador.X.cor}">${rodada}</span>`
                casasPreenchidas[n] = 'X'
                rodada = 'O'
            } else {
                casas[n].innerHTML = `<span class="${jogador.O.cor}">${rodada}</span>`
                casasPreenchidas[n] = 'O'
                rodada = 'X'
            }
            divVezJogador.innerHTML = `• Vez de ${rodada === 'X' ? `${jogador.X.nome} (<span class="${jogador.X.cor} mx-1">X</span>)` : `${jogador.O.nome} (<span class="${jogador.O.cor} mx-1">O</span>)`}` // Mudar div informando qual é o jogador que está na sua vez
        }
    }
}
// - Preencher casas


// + Verificar se alguém venceu a rodada/empatou
function verificarResultado(item) {
    for (let c = 0; c < 2; c++) {
        let caractere
        c == 1 ? caractere = 'O' : caractere = 'X'
        if (fimRodada === false) {
            if ((casasPreenchidas[item[0]] == caractere) && (casasPreenchidas[item[1]] == caractere) && (casasPreenchidas[item[2]] == caractere)) {
                fimRodada = true
                for (pos in casasPreenchidas) {
                    casasPreenchidas[pos] = ''
                }

                if (c == 1) {
                    jogador.O.pontuação++
                    jogador.O.divPlacar.innerText = `${jogador.O.pontuação}`

                } else {
                    jogador.X.pontuação++
                    jogador.X.divPlacar.innerText = `${jogador.X.pontuação}`
                }

                divVezJogador.innerHTML = ''
                divFimRodada.innerHTML = `
                    ${c == 1 ? jogador.O.nome : jogador.X.nome} venceu a rodada <br>
                    <button class="btn btn-outline-primary rounded-pill my-2" onclick="comecarNovoJogo()">
                        Começar próxima rodada
                    </button>
                `
            }
        }
    }
}
// - Verificar se alguém venceu a rodada/empatou


// + Conteúdo a ser exibido após o fim da rodada
function comecarNovoJogo() {
    for (pos in casas) {
        casas[pos].innerHTML = ''
    }

    fimRodada = false
    divFimRodada.innerHTML = ''
    rodada = rodada == 'X' ? rodada = 'O' : rodada = 'X'
    divVezJogador.innerHTML = `• Vez de ${rodada === 'X' ? `${jogador.X.nome} (<span class="${jogador.X.cor} mx-1">X</span>)` : `${jogador.O.nome} (<span class="${jogador.O.cor} mx-1">O</span>)`}`
}
// - Conteúdo a ser exibido no fim da rodada


// + Funções para casas
function casa1() {
    preencherCasa(0)
    possiveisResultados.forEach(verificarResultado)
}

function casa2() {
    preencherCasa(1)
    possiveisResultados.forEach(verificarResultado)
}

function casa3() {
    preencherCasa(2)
    possiveisResultados.forEach(verificarResultado)
}

function casa4() {
    preencherCasa(3)
    possiveisResultados.forEach(verificarResultado)
}

function casa5() {
    preencherCasa(4)
    possiveisResultados.forEach(verificarResultado)
}

function casa6() {
    preencherCasa(5)
    possiveisResultados.forEach(verificarResultado)
}

function casa7() {
    preencherCasa(6)
    possiveisResultados.forEach(verificarResultado)
}

function casa8() {
    preencherCasa(7)
    possiveisResultados.forEach(verificarResultado)
}

function casa9() {
    preencherCasa(8)
    possiveisResultados.forEach(verificarResultado)
}
// - Funções para casas