function configurar() {
    const btnSortear = document.getElementById("btnSorteio");
    const btnAdicionar = document.getElementById("btnAdicionar")
    const Regex = /^[A-Za-zÁ-ÿ]+[][A-Za-zÁ-ÿ]+$/;

    btnAdicionar.addEventListener('click', () => {
        verificar(Regex);
    });

}


function verificar(Regex) {
    let name = document.getElementById("name").value.trim();
    let vetorName = name.split(',');
    try {
        if (!Regex.test(vetorName[0])) {
            throw new Error("Nome inválido");
        }


    } catch (Error) {
        exibirErro(Error.message);
        console.log(Error);
    }
}




function exibirErro(mensagem) {
    let saida = document.getElementById('output');
    if (saida instanceof HTMLParagraphElement) {
        saida.textContent = 'Erro: ' + mensagem;
    }
}

document.addEventListener('DOMContentLoaded', configurar);