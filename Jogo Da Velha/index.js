const vencedores = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

let jogador = '❌'

let tds = document.querySelectorAll('td')

function ganhou() {
    let empate = true;
    vencedores.forEach(posicao => {
        let pos1 = tds[posicao[0]]
        let pos2 = tds[posicao[1]]
        let pos3 = tds[posicao[2]]

        if (pos1.innerHTML == jogador && pos2.innerHTML == jogador && pos3.innerHTML == jogador) {
            alert(jogador + " ganhou a partida, jogue novamente!")
            limpar()
            empate = false;
        }
    })

    if (empate && Array.from(tds).every(td => td.innerHTML != "")) {
        alert("Deu velha, tente novamente!");
        limpar();
    }
}

function limpar() {
    tds.forEach(td => {
        td.innerHTML = ''
    })
}

tds.forEach((td, indice) => {
    td.addEventListener('click', () => {
        if (td.innerHTML == "") {
            td.innerHTML = jogador;
            ganhou();

            if (jogador == "❌") {
                jogador = "🟢"
            } else {
                jogador = "❌"
            }
        } else {
            alert('local já preenchido, tente outro!')
        }
    })
});
