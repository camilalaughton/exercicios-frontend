function calcular() {
    const precoTexto = document.getElementById("valorproduto").value;
    const pagoTexto = document.getElementById("valorpago").value;

    const preco = parseFloat(precoTexto);
    const pago = parseFloat(pagoTexto);

    const resultado = document.getElementById("resultado");

    if (isNaN(preco) || isNaN(pago) || pago === 0 || preco === 0) {
        resultado.textContent = "Digite valores válidos!";
        resultado.className = "erro";
        return;
    }

    if (pago < preco) {
        resultado.textContent = "Valor pago insuficiente!";
        resultado.className = "erro";
        return;
    }

    const troco = pago - preco;
    resultado.textContent = "Troco: R$ " + troco.toFixed(2);
    resultado.className = "ok";
}

document.getElementById("btn").addEventListener("click", calcular);