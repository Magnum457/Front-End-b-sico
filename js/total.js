// varivaeis que guardam os componentes da página
	var input_quantidade = document.querySelector("#qtd");
	var output_total = document.querySelector("#total");

// funções
	input_quantidade.oninput = function() {
		// pegando o valor do preço do produto
		var preco = document.querySelector("#preco").textContent;

		// tranformando a string em float
		preco = preco.replace("R$ ", "");
		preco = preco.replace(",", ".");
		preco = parseFloat(preco);

		// fazendo o calculo
		var quantidade = input_quantidade.value;
		var total = quantidade * preco;

		// retransformando em string e mandando para a página
		total = "R$ " + total.toFixed(2);
		total = total.replace(".", ",");

		output_total.value = total;
	}