const botao = document.getElementById('botao');
const botaoApagar = document.getElementById('botao-apagar');

const inputs = document.getElementsByTagName('input');
const textBox = document.getElementById('viagem');

function tiraDefault(event) {
    event.preventDefault();
}

function apagarTudo() {
    for (let index = 0; index < inputs.length; index += 1) {
        inputs[index].value = '';
        inputs[index].checked = false;
    }
    textBox.value = '';
}

//botao.addEventListener('click', tiraDefault);
botaoApagar.addEventListener('click', apagarTudo);
