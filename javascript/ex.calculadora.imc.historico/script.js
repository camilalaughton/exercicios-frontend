const history = [] // array vazio que vai acumular os resultados

// pega o botão pelo id
const button = document.getElementById('btn-calculate')

// quando o botão for clicado, executa a função calcular
button.addEventListener('click', calculate)

function classifyIMC(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso'
    } else if (imc < 25) {
        return 'Peso normal'
    } else if (imc < 30) {
        return 'Sobrepeso'
    } else if (imc < 35) {
        return 'Obesidade Grau I'
    } else if (imc < 40) {
        return 'Obesidade Grau II'
    } else {
        return 'Obesidade Grau III'
    }
}

function calculate(event) {
    event.preventDefault() // impede o formulário de recarregar a página

     // 1. primeiro pega os valores
    const name = document.getElementById('name').value
    const weight = parseFloat(document.getElementById('weight').value)
    const height = parseFloat(document.getElementById('height').value)

    // validação — campos vazios ou inválidos
    if (!name || isNaN(weight) || isNaN(height)) {
        document.getElementById('result').textContent = 'Preencha todos os campos corretamente!'
        return // para a função aqui
    }

    // 2. depois calcula
    const imc = (weight / (height ** 2)).toFixed(1)
    const classification = classifyIMC(parseFloat(imc))

    // 3. exibe o resultado
    const result = document.getElementById('result')
    result.textContent = `${name}, seu IMC é ${imc} - ${classification}`

    // 4. só agora adiciona ao histórico (porque agora name, imc e classification existem)
    history.push(`${name}: ${imc} - ${classification}`)

    // 5. atualiza a lista
    updateHistory()
}

function updateHistory() {
    const historyList = document.getElementById('history-list')

    historyList.innerHTML = '' // limpa a lista antes de redesenhar 

    for (let i = 0; i < history.length; i++) {
        historyList.innerHTML += `<li>${history[i]}</li>`
    }
}

const btnClear = document.getElementById('btn-clear')
btnClear.addEventListener('click', clearHistory)

function clearHistory() {
    history.length = 0 // esvazia o array
    updateHistory() // redesenha a lista (agora vazia)
    document.getElementById('result').textContent = ''
}