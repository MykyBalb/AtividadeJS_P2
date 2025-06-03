class ContadorCaracter {
    constructor(texto) {
        this.texto = texto.trim();
    }

    contarcaracter() {
        if (this.texto === '') {
            return 0;
        }
        const caracter = this.texto.split('');
        return caracter.length;
    }
}

const textoInput = document.getElementById('textoInput');
const btnContarcaracter = document.getElementById('btnContarCaracter');
const resultadoParagrafo = document.getElementById('resultado');
const errorMessage = document.getElementById('errorMessage');

function showErrorMessage(message) {
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
    setTimeout(() => {
        errorMessage.style.display = 'none';
    }, 3000);
}

btnContarcaracter.addEventListener('click', () => {
    const textoDigitado = textoInput.value;

    if (textoDigitado.trim() === '') {
        showErrorMessage('Por favor, digite algum texto para contar as caracter.');
        resultadoParagrafo.textContent = 'Número de caracter: 0';
        return;
    }

    const meuContador = new ContadorCaracter(textoDigitado);

    const numcaracter = meuContador.contarcaracter();
    if(numcaracter > 70) {
        resultadoParagrafo.textContent = 'Há mais de 70 caracteres em seu texto!'
    } else {
        resultadoParagrafo.textContent = `Número de caracter: ${numcaracter}`;
    }
});

textoInput.addEventListener('input', () => {
    resultadoParagrafo.textContent = 'Número de caracter: 0'; 
    errorMessage.style.display = 'none'; 
});
