var lastIdPessoa = 0
var pessoas = {}
var opcoesGene = ["Placeholder 1", "Placeholder 2"];
var opcoesSexo = ["Masculino", "Feminino", "Indeterminado"];
 
function addPessoa(geracao){

	newgen = document.createElement("li")
	gen = document.getElementById("pessoas"+geracao)
	newgen.textContent = "nome"
	newgen.setAttribute("title", "Genotipo")
	//id="draggable"
	//class="ui-widget-content"
	newgen.setAttribute("id", "pessoa" + ++lastIdPessoa)
	//$('#'+openaddress)
	newgen.setAttribute("class", "ui-widget-content")
	newgen.addEventListener('build', function () {alert("") })
	
	//newgen.appendChild(nome)
	//newgen.draggable();
	//nome.setAttribute("style", "widht:30px")
        pessoa = {
            geracao: geracao,
            probando: false,
            sexo: 0,
            alelo1: 0,
            alelo2: 0,
            id: lastIdPessoa
        }
        pessoas[lastIdPessoa] = pessoa
        
	$("#pessoas"+geracao).append(newgen);
	$( ".selectable" ).selectable({
      stop: function() {
        var result = "";
        $( ".ui-selected", this ).each(function() {
          menuPessoa(pessoa);
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

//return: se algum menu foi de fato fechado
function closeMenu(){
    if($('.ui-selected').length > 1) {
        $(".ui-selected").removeClass("ui-selected");
    }   
    return true
}

function menuPessoa(pessoa){
    console.log("id: " + pessoa.id)
    
    var divMenu = document.getElementById("menuPessoa");
        divMenu.innerHTML = "";


    if (!closeMenu()){
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

        //definindo a combobox do sexo
        var selectSexo = document.createElement("select");
        selectSexo.id = "sexo";
        divMenu.appendChild(selectSexo);
        
        console.log("sexo: " + pessoa.sexo)

        for (var i = 0; i < opcoesSexo.length; i++) {
            var option = document.createElement("option");
            option.value = i;
            if (i == pessoa.sexo){
                option.setAttribute("selected", "true")
            }
            option.text = opcoesSexo[i];
            selectSexo.appendChild(option);
        }

        $(selectSexo).change(function(){
            pessoa.sexo = selectSexo[selectSexo.selectedIndex].value
        })
        

        //definindo a combobox da analise (Probando/Normal)
        var selectAnalise = document.createElement("select");
        selectAnalise.id = "selectAnalise";
        divMenu.appendChild(selectAnalise);

        var opcoesAnalise = {true: "Probando", false:"Normal"};
        optionTrue = document.createElement("option");
        optionFalse = document.createElement("option");

        optionTrue.value = true;
        optionTrue.text = opcoesAnalise[true];

        optionFalse.value = false;
        optionFalse.text = opcoesAnalise[false];
        console.log("probando: " + pessoa.probando)
        if (pessoa.probando){
            optionTrue.setAttribute("selected", "true")
        }
        else{
            optionFalse.setAttribute("selected", "true")
        }

        selectAnalise.appendChild(optionTrue);
        selectAnalise.appendChild(optionFalse);
            
        //alteracao no selectAnalise -> alteracao na pessoa (modelo)
        $(selectAnalise).change(function(){
            pessoa.probando = selectAnalise[selectAnalise.selectedIndex].value === 'true'
        })
    }


}


