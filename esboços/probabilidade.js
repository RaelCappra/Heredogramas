
function calcProbabilidade(probando, gene){
	var list = [];  
	var possibilidades = [];
	if(gene.getAttribute("cromossomo") == "X" || get.getAttribute("cromossomo") == "Y"){
		//crossing over default com o genero envolvido
		//combinações = geneAPai/geneAMae, geneAPai/geneBMae, geneBPAI/geneAMae, geneBPai/geneBMae
		
	}else{
		list.push(probando.pai.alelo1+"/"+probando.mae.alelo1)
		list.push(probando.pai.alelo2+"/"+probando.mae.alelo1)
		list.push(probando.pai.alelo1+"/"+probando.mae.alelo2)
		list.push(probando.pai.alelo2+"/"+probando.mae.alelo2)

		for (var i = 0; i < list.length; i++) {
			countInArray(list, list[i]);
		};

		for (var i = 0; i < possibilidades.length; i++) {

			possibilidades[i] = possibilidades[i]/ list.length;

		};
		return possibilidades;

		//pego um da lista -> conta 1 possibilidades -> removo ele da lista
	}
}

function countInArray(list, fenotipo) {
    var count = 0;
    for (var i = 0; i < list.length; i++) {
        if (list[i] === fenotipo) {
            count++;
            delete array[i];
        }
    }
    possibilidades["fenotipo"] = count;
}