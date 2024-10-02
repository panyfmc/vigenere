var doc = window.document;


// Função responsável por ler o texto de entrada
function lerTexto(texto) {
	var resultado = [];
	for (var i = 0; i < texto.length; i++) {
		var charCode = texto[i].charCodeAt();  //var que armazena o caracter da posição i
		if (charCode >= 97 && charCode <= 122) { // Letras minúsculas a-z (soma 32 ao código da letra maiúscula correspondente A=65+32=97=a)
			resultado[i] = (charCode - 97);
		} else if (charCode >= 65 && charCode <= 90) { // Letras maiúsculas A-Z (65, o valor Unicode para A até 90, ou seja 25 posições)
			resultado[i] = (charCode - 33);
		} else {
			return false;
		}
	}
	return resultado;
}


// Função responsável por ler e definir o comprimento da chave
function lerChave(chaveEntrada, chaveFinal) {  //var que recebe a chave e a que define o tamanho final
    var resultadoChaveFinal = [];
    if (chaveFinal.length <= chaveEntrada.length) {
        for (var i = 0; i < chaveEntrada.length; i++) {
            resultadoChaveFinal[i] = chaveFinal[i % chaveFinal.length];
        }
    } else {
        alert("Erro! Insira uma chave menor ou texto de entrada maior.");
    }
    return resultadoChaveFinal;
}


function vigenere(funcao) {
    var entrada = doc.getElementById("texto_entrada").value;
	var chave = doc.getElementById("texto_chave").value;

	var palavraEntrada = lerTexto(entrada) ? chaveEntrada = lerTexto(entrada) :
		alert("Erro ao ler entrada! Informe apenas letras de a-z sem simbolos.");

    var chaveComprimento = lerTexto(chave) ? chaveFinal = lerTexto(chave) :
		alert("Erro ao ler chave! Informe apenas letras de a-z.");

	var resultadoChaveFinal = lerChave(chaveEntrada, chaveFinal);
	var resultado = '';
	var resultadoNumerico = [];

	for (var i = 0; i < palavraEntrada.length; i++) {
		if (funcao == "E") {
			resultadoNumerico[i] = (chaveEntrada[i] +  resultadoChaveFinal[i]) % 26;
		} else {
			resultadoNumerico[i] = ((chaveEntrada[i] -  resultadoChaveFinal[i]) % 26) < 0 ?
				resultadoNumerico[i] = ((chaveEntrada[i] -  resultadoChaveFinal[i]) % 26) + 26 :
				resultadoNumerico[i] = ((chaveEntrada[i] -  resultadoChaveFinal[i]) % 26);
		}
		resultado += String.fromCharCode(resultadoNumerico[i] + 65);
	}
	doc.getElementById("saida").style.display = 'block';
	doc.getElementById("resultado").innerHTML = '<span id="texto_resultado">' + resultado.toLowerCase() + '</span>';
}