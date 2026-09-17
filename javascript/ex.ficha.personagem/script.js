function calcular() {
    const nome = document.getElementById("nome").value;
    const forca = parseInt(document.getElementById("forca").value);
    const agilidade = parseInt(document.getElementById("agilidade").value);
    const nivel = parseInt(document.getElementById("nivel").value);

    const erro = document.getElementById("erro");

    if (isNaN(forca) || isNaN(agilidade) || isNaN(nivel)) {
        erro.textContent = "Digite valores válidos!";
        return;
    }

    if (isNaN(forca) || isNaN(agilidade) || isNaN(nivel)) {
    erro.textContent = "Digite valores válidos!";
    return;
    }

    if (forca < 1 || forca > 10 || agilidade < 1 || agilidade > 10 || nivel < 1 || nivel > 10) {
    erro.textContent = "Os valores devem estar entre 1 e 10!";
    return;
    }

erro.textContent = "";

    erro.textContent = "";

    document.getElementById("resultNome").textContent = "Nome: " + nome;

    const ataque = forca * nivel;
    const defesa = Math.round(agilidade * 1.5);

    document.getElementById("resultAtaque").textContent = "Poder de Ataque: " + ataque;
    document.getElementById("resultDefesa").textContent = "Poder de Defesa: " + defesa;

    const statusEl = document.getElementById("resultStatus");
    if (ataque > defesa) {
        statusEl.textContent = "Status: Personagem ofensivo!";
        statusEl.className = "status-ofensivo";
    } else if (ataque < defesa) {
        statusEl.textContent = "Status: Personagem defensivo!";
        statusEl.className = "status-defensivo";
    } else {
        statusEl.textContent = "Status: Personagem equilibrado!";
        statusEl.className = "status-equilibrado";
    }

    const nivelEl = document.getElementById("resultNivel");
    if (nivel >= 10) {
        nivelEl.textContent = "Nível: Lendário!";
    } else if (nivel >= 5) {
        nivelEl.textContent = "Nível: Experiente!";
    } else {
        nivelEl.textContent = "Nível: Iniciante!";
    }
}

document.getElementById("btn").addEventListener("click", calcular);