


function calcProbabilidade(probando, gene){
	var list = [];  
	var possibilidades = {};

	possibilidades["0/0"] = 0;
	possibilidades["1/0"] = 0;
	possibilidades["1/1"] = 0;

	if(gene.getAttribute("cromossomo") == "X" || gene.getAttribute("cromossomo") == "Y"){
		var tempList = [];
		if(probando.sexo == 2){
			list.push(pessoas[probando.pai].alelo1+"/"+pessoas[probando.mae].alelo1)
		list.push(pessoas[probando.pai].alelo2+"/"+pessoas[probando.mae].alelo1)
		list.push(pessoas[probando.pai].alelo1+"/"+pessoas[probando.mae].alelo2)
		list.push(pessoas[probando.pai].alelo2+"/"+pessoas[probando.mae].alelo2)
		console.log(list)

		for (var i = 0; i < list.length; i++) {
	        if (list[i] == "0/0") {
	            possibilidades["0/0"]++
	        }

	        if (list[i] == "1/0" || list[i] == "0/1") {
	            possibilidades["1/0"]++
	        }

	        if (list[i] == "1/1") {
	            possibilidades["1/1"]++
	        }
	    }
	    console.log(possibilidades)

		var total =  possibilidades["1/1"] +  possibilidades["1/0"] +  possibilidades["0/0"];
		possibilidades["1/1"] = possibilidades["1/1"]/total;
		possibilidades["1/0"] = possibilidades["1/0"]/total;
		possibilidades["0/0"] = possibilidades["0/0"]/total; 	
		console.log(possibilidades)	
			return possibilidades;
		}

		if(probando.sexo == 1){

			tempList.push(pessoas[probando.pai].alelo1+"/"+pessoas[probando.mae].alelo1)
			tempList.push(pessoas[probando.pai].alelo2+"/"+pessoas[probando.mae].alelo1)
			tempList.push(pessoas[probando.pai].alelo1+"/"+pessoas[probando.mae].alelo2)
			tempList.push(pessoas[probando.pai].alelo2+"/"+pessoas[probando.mae].alelo2)

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

			tempList.push(pessoas[probando.pai].alelo1+"/"+pessoas[probando.mae].alelo1)
			tempList.push(pessoas[probando.pai].alelo2+"/"+pessoas[probando.mae].alelo1)
			tempList.push(pessoas[probando.pai].alelo1+"/"+pessoas[probando.mae].alelo2)
			tempList.push(pessoas[probando.pai].alelo2+"/"+pessoas[probando.mae].alelo2)

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
		list.push(pessoas[probando.pai].alelo1+"/"+pessoas[probando.mae].alelo1)
		list.push(pessoas[probando.pai].alelo2+"/"+pessoas[probando.mae].alelo1)
		list.push(pessoas[probando.pai].alelo1+"/"+pessoas[probando.mae].alelo2)
		list.push(pessoas[probando.pai].alelo2+"/"+pessoas[probando.mae].alelo2)
		console.log(list)

		for (var i = 0; i < list.length; i++) {
	        if (list[i] == "0/0") {
	            possibilidades["0/0"]++
	        }

	        if (list[i] == "1/0" || list[i] == "0/1") {
	            possibilidades["1/0"]++
	        }

	        if (list[i] == "1/1") {
	            possibilidades["1/1"]++
	        }
	    }
		var total =  possibilidades["1/1"] +  possibilidades["1/0"] +  possibilidades["0/0"];
		possibilidades["1/1"] = possibilidades["1/1"]/total;
		possibilidades["1/0"] = possibilidades["1/0"]/total;
		possibilidades["0/0"] = possibilidades["0/0"]/total; 	
		console.log(possibilidades)	
		return possibilidades;

		//pego um da lista -> conta 1 possibilidades -> removo ele da lista
	}

	list = [];
	possibilidades = {};
}

function calculoComSexo(probando, aleloGenero){

}

function calculoGeral(probando){
		list.push(pessoas[probando.pai].alelo1+"/"+pessoas[probando.mae].alelo1)
		list.push(pessoas[probando.pai].alelo2+"/"+pessoas[probando.mae].alelo1)
		list.push(pessoas[probando.pai].alelo1+"/"+pessoas[probando.mae].alelo2)
		list.push(pessoas[probando.pai].alelo2+"/"+pessoas[probando.mae].alelo2)
		console.log(list)

		for (var i = 0; i < list.length; i++) {
	        if (list[i] == "0/0") {
	            possibilidades["0/0"]++
	        }

	        if (list[i] == "1/0" || list[i] == "0/1") {
	            possibilidades["1/0"]++
	        }

	        if (list[i] == "1/1") {
	            possibilidades["1/1"]++
	        }
	    }
		var total =  possibilidades["1/1"] +  possibilidades["1/0"] +  possibilidades["0/0"];
		possibilidades["1/1"] = possibilidades["1/1"]/total;
		possibilidades["1/0"] = possibilidades["1/0"]/total;
		possibilidades["0/0"] = possibilidades["0/0"]/total; 	
		console.log(possibilidades)	
		
}

function countInArray(list, fenotipo) {
    var count = 0;
    for (var i = 0; i < list.length; i++) {
        if (fenotipo == "0/0") {
            possibilidades["0/0"]++
        }

        if (fenotipo == "1/0" || fenotipo == "0/1") {
            possibilidades["1/0"]++
        }

        if (fenotipo == "1/1") {
            possibilidades["1/1"]++
        }
    }

}