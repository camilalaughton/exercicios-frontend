function classificarIMC(imc) {
    if (imc < 18.5) return { texto: "Abaixo do peso", classe: "cat-abaixo" };
    if (imc < 25) return { texto: "Peso normal", classe: "cat-normal" };
    if (imc < 30) return { texto: "Sobrepeso", classe: "cat-sobrepeso" };
    return { texto: "Obesidade", classe: "cat-obesidade" };
}

function calcular() {
    const pesoTexto = document.getElementById("weight").value;
    const alturaTexto = document.getElementById("height").value;

    const peso = parseFloat(pesoTexto);
    const altura = parseFloat(alturaTexto);

    const resultado = document.getElementById("resultado");
    const categoria = document.getElementById("categoria");

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        resultado.textContent = "Digite valores válidos!";
        categoria.textContent = "";
        categoria.className = "";
        return;
    }

    const imc = peso / (altura ** 2);
    const { texto, classe } = classificarIMC(imc);

    resultado.textContent = "IMC: " + imc.toFixed(2);
    categoria.textContent = texto;
    categoria.className = classe;
}

document.getElementById("btn").addEventListener("click", calcular);