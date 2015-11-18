
var list = [];  
var possibilidades = [];

function calcProbabilidade(probando, gene){

	if(gene.getAttribute("cromossomo") == "X" || get.getAttribute("cromossomo") == "Y"){
		var tempList = [];
		if(probando.sexo == 2){
			calculoGeral(probando);
			return possibilidades;
		}

		if(probando.sexo == 1){

			tempList.push(probando.pai.alelo1+"/"+probando.mae.alelo1)
			tempList.push(probando.pai.alelo2+"/"+probando.mae.alelo1)
			tempList.push(probando.pai.alelo1+"/"+probando.mae.alelo2)
			tempList.push(probando.pai.alelo2+"/"+probando.mae.alelo2)

			for (var i = 0; i < tempList.length; i++) {
				if(!tempList[i].contains("Y")){
					list.push(tempList[i]);
				}
			};

			for (var i = 0; i < list.length; i++) {
				countInArray(list, list[i]);
			};

			for (var i = 0; i < possibilidades.length; i++) {

				possibilidades[i] = possibilidades[i]/ list.length;

			};
			return possibilidades;
		}

		if(probando.sexo == 0){

			tempList.push(probando.pai.alelo1+"/"+probando.mae.alelo1)
			tempList.push(probando.pai.alelo2+"/"+probando.mae.alelo1)
			tempList.push(probando.pai.alelo1+"/"+probando.mae.alelo2)
			tempList.push(probando.pai.alelo2+"/"+probando.mae.alelo2)

			for (var i = 0; i < tempList.length; i++) {
				if(tempList[i].contains("Y")){
					list.push(tempList[i]);
				}
			};

			for (var i = 0; i < list.length; i++) {
				countInArray(list, list[i]);
			};

			for (var i = 0; i < possibilidades.length; i++) {

				possibilidades[i] = possibilidades[i]/ list.length;

			};
			return possibilidades;
		}



		//crossing over default com o genero envolvido
		//combinações = geneAPai/geneAMae, geneAPai/geneBMae, geneBPAI/geneAMae, geneBPai/geneBMae
		
	}else{
		calculoGeral(probando);
		return possibilidades;

		//pego um da lista -> conta 1 possibilidades -> removo ele da lista
	}
}

function calculoComSexo(probando, aleloGenero){

}

function calculoGeral(probando){
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
		
}

function countInArray(list, fenotipo) {
    var count = 0;
    for (var i = 0; i < list.length; i++) {
        if (list[i] === fenotipo) {
            count++;
            delete list[i];
        }
    }
    possibilidades["fenotipo"] = count;
}