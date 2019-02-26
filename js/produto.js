// variaveis para guardar os componentes da página
var inputTamanho = document.querySelector('[name=tamanho]');
var outputTamanho = document.querySelector('[name=valortamanho]');

// funções
function mostraTamanho() {
	outputTamanho.value = inputTamanho.value;
	outputTamanho.textContent = event.target.value
}

document.onload = mostraTamanho;
inputTamanho.oninput = mostraTamanho;