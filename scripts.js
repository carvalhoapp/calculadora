const form = document.querySelector('#form-calculator');
const largura = document.querySelector('#largura');
const altura = document.querySelector('#altura');
const quantidade = document.querySelector('#quantidade');
const corte = document.querySelector('#corte');
const verniz = document.querySelector('#verniz');
const m2 = document.querySelector('#m2');
const divResultado = document.querySelector('#resultado');
const mostraResultado = document.querySelector('#valor-final');
const clear = document.querySelector(".btn-clear");
const divError = document.querySelector("#errors");
const errorMessage = document.querySelector(".error-description");
const errorClose = document.querySelector(".error-close");


form.addEventListener("submit", event => {
    event.preventDefault();

    const data = {
        lar: largura.value,
        alt: altura.value,
        quant: parseInt(quantidade.value),
        corte: corte.checked,
        verniz: verniz.checked,
        m2: m2.value
    }

    const larguraTratada = data.lar.replace(",", ".");
    const larguraFinal = parseFloat(larguraTratada / 100);
    const alturaTratada = data.alt.replace(",", ".");
    const alturaFinal = parseFloat(alturaTratada / 100);
    const m2Tratado = parseFloat(data.m2.replace(",", "."));
    let quantFinal;
    if (!data.quant) {
        quantFinal = 1;
    } else {
        quantFinal = data.quant;
    }

    const erro = Errors(larguraFinal, alturaFinal, quantFinal, m2Tratado);

    if (erro) {
        errorMessage.innerHTML = erro;
        divResultado.style.display = "none";
        divError.style.display = "block";
    } else {
        const resultado = CalculoM2(larguraFinal, alturaFinal, quantFinal, data.corte, data.verniz, m2Tratado);
        mostraResultado.innerHTML = resultado;
        divResultado.style.display = "block";
        divError.style.display = "none";
    }

});

clear.addEventListener('click', () => {
    divResultado.style.display = "none";
});

errorClose.addEventListener('click', () => {
    divError.style.display = "none";
});

function CalculoM2(lar, alt, quant, corte, verniz, m2) {
    if (corte) {
        lar = lar + 0.015;
        alt = alt + 0.015;
    }

    if (verniz) {
        m2 = m2 + 5;
    }

    const valor = ((((lar * alt) * quant) * 110));
    const valorFinal = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return valorFinal;
}

function Errors(lar, alt, quant, m2) {
    const errors = {
        error01: "Não é possível utilizar o valor '0' na equação!",
        error02: "A largura não pode ser um texto!",
        error03: "A altura não pode ser um texto!",
        error04: "A quantidade não pode ser um texto!",
        error05: "O valor do m² não pode ser um texto!",
    }

    if (lar == 0 || alt == 0 || quant == 0 || m2 == 0) {
        return errors.error01;
    }

    if (isNaN(lar)) {
        return errors.error02;
    }

    if (isNaN(alt)) {
        return errors.error03;
    }

    if (isNaN(quant)) {
        return errors.error04;
    }

    if (isNaN(m2)) {
        return errors.error05;
    }

    return false;
}
