document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('#btnCalc');
    btn instanceof HTMLButtonElement ? btn.addEventListener('click', actionBtn) : console.error('elemento não instaciado')
});

function actionBtn() {
    try {
        const dateUserInput = document.querySelector('#date').value;
        if (!validarData(dateUserInput)) {
            throw new Error('Formato inválido, por favor digite no padrão')
        }
        calcularIdade(dateUserInput);

    } catch (e) {
        const input = document.querySelector('#date');
        const output = document.querySelector('#output');
        let p = document.createElement('p');
        p.textContent = e;
        p.style.color = 'red';
        output.appendChild(p);
        date.value = '';
        setTimeout(() => {
            output.removeChild(p);
        }, 1000);
    }
}

function calcularIdade(dateUserInput) {
    let userDate = dateUserInput.split('/');
    let date = new Date(`${userDate[2]}-${userDate[1]}-${userDate[0]}`);
    const yearUser = date.getFullYear();
    let localDate = new Date();
    localYear = localDate.getFullYear();
    const age = localYear - yearUser;
    showAge(age);
}

function validarData(entrada) {
    let expressao = /^\d{2}\/\d{2}\/\d{4}$/;
    return expressao.test(entrada)
}

function showAge(age) {
    const output = document.querySelector('#output');
    let p = document.createElement('p');
    p.textContent = `Sua idade é: ${age} anos`;
    output.appendChild(p);
}