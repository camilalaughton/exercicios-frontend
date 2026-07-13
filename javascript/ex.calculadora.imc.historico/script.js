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

    // pega os valores dos inputs
    const name = document.getElementById('name').value
    const weight = parseFloat(document.getElementById('weight').value)
    const height = parseFloat(document.getElementById('height').value)

    // calcula o IMC
    const imc = (weight / (height ** 2)).toFixed(1)
    
    // exibe o resultado na div#result
    const result = document.getElementById('result')
    const classification = classifyIMC(parseFloat(imc))
    result.textContent = `${name}, seu IMC é ${imc} - ${classification}`
}

