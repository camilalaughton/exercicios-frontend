const history = []

const button = document.getElementById('btn-calculate')
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
    event.preventDefault()

    const name = document.getElementById('name').value.trim()
    const weight = parseFloat(document.getElementById('weight').value)
    const height = parseFloat(document.getElementById('height').value)

    const result = document.getElementById('result')
    const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/

    if (!name || !nameRegex.test(name)) {
        result.textContent = 'Digite um nome válido (apenas letras)!'
        return
    }

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        result.textContent = 'Preencha peso e altura com valores válidos!'
        return
    }

    const imc = (weight / (height ** 2)).toFixed(1)
    const classification = classifyIMC(parseFloat(imc))

    result.textContent = `${name}, seu IMC é ${imc} - ${classification}`

    history.push(`${name}: ${imc} - ${classification}`)
    updateHistory()
}

function updateHistory() {
    const historyList = document.getElementById('history-list')
    const historyEmpty = document.getElementById('history-empty')

    historyList.innerHTML = ''

    if (history.length === 0) {
        historyEmpty.style.display = 'flex'
        historyList.style.display = 'none'
        return
    }

    historyEmpty.style.display = 'none'
    historyList.style.display = 'block'

    for (let i = 0; i < history.length; i++) {
        historyList.innerHTML += `<li>${history[i]}</li>`
    }
}

const btnClear = document.getElementById('btn-clear')
btnClear.addEventListener('click', clearHistory)

function clearHistory() {
    history.length = 0
    updateHistory()
    document.getElementById('result').textContent = ''
}