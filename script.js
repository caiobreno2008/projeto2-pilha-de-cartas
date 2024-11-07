let deck = []

const addCard = () => {
    let cardName = prompt("Digite o nome da carta:")
    deck = deck.concat(cardName)
    alert(`Carta "${cardName}" adicionada ao topo do baralho.`)
}

const pullCard = () => {
    if (deck.length === 0) {
        alert("O baralho está vazio, não há cartas para puxar.")
    } else {
        let pulledCard = deck.slice(-1)[0]
        deck = deck.slice(0, -1)
        alert(`Você puxou a carta: "${pulledCard}"`)
    }
}

const start = () => {
    let option = ""

    while (option !== "3") {
        option = prompt(`Baralho de cartas
Quantidade de cartas no baralho: ${deck.length}
1. Adicionar uma carta
2. Puxar uma carta
3. Sair
Escolha uma opção:`)

        switch (option) {
            case "1":
                addCard()
                break
            case "2":
                pullCard()
                break
            case "3":
                alert("acabou o jogo.")
                break
            default:
                alert("Opção inválida, por favor escolha 1, 2 ou 3.")
        }
    }
}

start()
