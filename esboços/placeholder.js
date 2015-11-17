
    
 
function addPessoa(geracao){
	newgen = document.createElement("li")
	gen = document.getElementById("pessoas"+geracao)
	newgen.textContent = "nome"
	newgen.setAttribute("title", "Genotipo")
	//id="draggable"
	//class="ui-widget-content"
	newgen.setAttribute("id", "id_pessoa"+geracao)
	//$('#'+openaddress)
	newgen.setAttribute("class", "ui-widget-content")
	newgen.addEventListener('build', function () {alert("") })
	
	//newgen.appendChild(nome)
	//newgen.draggable();
	//nome.setAttribute("style", "widht:30px")
	$("#pessoas"+geracao).append(newgen);
	$( ".selectable" ).selectable({
      stop: function() {
        var result = "";
        $( ".ui-selected", this ).each(function() {
          menuPessoa();
        });
      }
    });
	
	
	

	/*
	botao = document.getElementById("add-geracao")
	newgen = document.createElement("div")
	newgen.setAttribute("class", "geracao")

	id = parseInt(botao.parentElement.id)
	newgen.setAttribute("id", id + 1)

	botaoPessoa = document.createElement("button")
	botaoPessoa.setAttribute("onclick", "addPessoa")
	botaoPessoa.setAttribute("id", "add-pessoa" + (id + 1))
	botaoPessoa.textContent = "+ Pessoa"

	newgen.appendChild(botaoPessoa)
	newgen.appendChild(botao)

	hr = document.createElement("hr")
	root.appendChild(hr)
	root.appendChild(newgen)
	*/
	    


}

function menuPessoa(){
	




  	if($('.ui-selected').length > 1) {
  		$("p:last").removeClass("intro").addClass("main");

	  	$('.ui-selected').each(function () {
	  		$("#"+$(this).attr("id")).removeClass("ui-selected");
			
		});

	}else{
    
		var divMenu = document.getElementById("menuPessoa");
		divMenu.innerHTML = "";
		var opcoesGene = ["Placeholder 1", "Placeholder 2"];
		var opcoesSexo = ["Masculino", "Feminino"];
		
		var selectAlelo1 = document.createElement("select");
		selectAlelo1.id = "alelo1";
		var selectAlelo2 = document.createElement("select");
		selectAlelo2.id = "alelo2";

		divMenu.appendChild(selectAlelo1);
		divMenu.appendChild(selectAlelo2);

		for (var i = 0; i < opcoesGene.length; i++) {
		    var option1 = document.createElement("option");
		    option1.value = i + 1;
		    option1.text = opcoesGene[i];

		    var option2 = document.createElement("option");
		    option2.value = i + 1;
		    option2.text = opcoesGene[i];

		    selectAlelo1.appendChild(option1);
		    selectAlelo2.appendChild(option2);
		}

		var selectSexo = document.createElement("select");
		selectSexo.id = "sexo";
		divMenu.appendChild(selectSexo);

		for (var i = 0; i < opcoesSexo.length; i++) {
		    var option = document.createElement("option");
		    option.value = i + 1;
		    option.text = opcoesSexo[i];
		    selectSexo.appendChild(option);
		}
	}

}
