
var alelos = []
function getXml(xml){
    if (window.XMLHttpRequest){
        xmlhttp=new XMLHttpRequest()
    }
    else{
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP")
    }
    xmlhttp.open("GET", xml, false)
    xmlhttp.send()
    xmlDocument=xmlhttp.responseXML
    return xmlDocument
}

function setupGenes(){
    xmlDocument = getXml("genes.xml")
    selectGenes = document.getElementById("gene")

    genes = xmlDocument.getElementsByTagName("gene")
    for (i = 0; i < genes.length; i++){
        g = genes[i]
        element = document.createElement("option")
        element.setAttribute("value", g.getAttribute("id"))
        element.textContent = g.getAttribute("name")
        selectGenes.appendChild(element)
    }

    return xmlDocument
}
select = document.getElementById("gene");
xml = setupGenes()
alelos = [];




$("#gene").change(function(){

    alelosXml = xml.getElementById(select.options[select.selectedIndex].value).getElementsByTagName("alelo")
    alelos = [];
    for (var i = alelosXml.length - 1; i >= 0; i--) {
        alelos.push(alelosXml[i].getAttribute("name"))
    };


    /*console.log(xml)
    elementGene = xml.getElementById(this.value)
    localAlelos = []
    for (elementAlelo in elementGene.children){
        console.log(elementAlelo)
        alelo = {}
        alelo.text = elementAlelo.getAttribute("name")
        alelo.dominancia = elementAlelo.getAttribute("dominancia")
        alelo.textComDominancia = function(){
            return this.text + (dominancia == "1" ? " (R)" : " (D)")
        }
        localAlelos.push(alelo)
    }
    alelos = localAlelos*/
})
$(function() {
    $( document ).tooltip();
	$( ".selectable" ).selectable({
      stop: function() {
        var result = "";
        $( ".ui-selected", this ).each(function() {
          closeMenu();
        });
      },
      selected: function() {
        $( ".ui-selected", this ).each(function() {
            //console.log(this.id)
            pessoaId = this.id.substring(6)
            
            pessoa = pessoas[pessoaId]
            
            menuPessoa(pessoa, alelos)
        });
      }

    });
	
});

var root = document.getElementById("heredograma")

function addGeracao(){
    botao = document.getElementById("add-geracao")
    newgen = document.createElement("div")
    newgen.setAttribute("class", "geracao")

    id = parseInt(botao.parentElement.id)
    newgen.setAttribute("id", id + 1)


    botaoPessoa = document.createElement("button")
    botaoPessoa.setAttribute("onclick", "addPessoa("+(id + 1)+")")
    botaoPessoa.textContent = "+ Pessoa"

    olPessoas = document.createElement("ol")
    olPessoas.setAttribute("class", "selectable ui-selectable")
    olPessoas.setAttribute("id", "pessoas"+(id + 1))

    newgen.appendChild(botaoPessoa)
    newgen.appendChild(botao)
    newgen.appendChild(olPessoas)

    hr = document.createElement("hr")
    root.appendChild(hr)
    root.appendChild(newgen)
}




var lastIdPessoa = 0
var pessoas = {}
//var opcoesGene = ["Placeholder 1", "Placeholder 2"];
var opcoesSexo = ["Masculino", "Feminino", "Indeterminado"];
 
function addPessoa(geracao){
	lastIdPessoa++;
	newgen = document.createElement("li")
	gen = document.getElementById("pessoas"+geracao)
	newgen.textContent = lastIdPessoa;
	newgen.setAttribute("title", "Genotipo")
	//id="draggable"
	//class="ui-widget-content"
	newgen.setAttribute("id", "pessoa" + lastIdPessoa)
	//$('#'+openaddress)
	newgen.setAttribute("class", "ui-widget-content")
	
	
	//newgen.appendChild(nome)
	//newgen.draggable();
	//nome.setAttribute("style", "widht:30px")
        pessoa = {
            geracao: geracao,
            probando: false,
            sexo: 0,
            alelo1: 0,
            alelo2: 0,
            id: lastIdPessoa,
            pai: null, mae: null
        }
        pessoas[lastIdPessoa] = pessoa
        
	$("#pessoas"+geracao).append(newgen);
	$( ".selectable" ).selectable({
      stop: function() {
        var result = "";
        $( ".ui-selected", this ).each(function() {
          menuPessoa(pessoa, alelos);
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
        return true;
    }else{
        return false;
    }   
    
}

function menuPessoa(pessoa, opcoesGene){
    //console.log("id: " + pessoa.id)
    
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
            option1.value = i;
            option1.text = opcoesGene[i];
            if (i == pessoa.alelo1){
                option1.setAttribute("selected", "true")
            }

            var option2 = document.createElement("option");
            option2.value = i;
            option2.text = opcoesGene[i];
            if (i == pessoa.alelo2){
                option2.setAttribute("selected", "true")
            }

            selectAlelo1.appendChild(option1);
            selectAlelo2.appendChild(option2);
        }

        $(selectAlelo2).change(function(){
        	pessoa.alelo2 = parseInt(selectAlelo2[selectAlelo2.selectedIndex].value)
        })

        $(selectAlelo1).change(function(){
        	pessoa.alelo1 = parseInt(selectAlelo1[selectAlelo1.selectedIndex].value)
        })

        //definindo a combobox do sexo
        var selectSexo = document.createElement("select");
        selectSexo.id = "sexo";
        divMenu.appendChild(selectSexo);
        
       

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
            pessoa.sexo = parseInt(selectSexo[selectSexo.selectedIndex].value)
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
       // console.log("probando: " + pessoa.probando)
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

        var pessoasMasculinas = pessoasPorGenero(0);
        var pessoasFemininas = pessoasPorGenero(1);

        var selectPai = document.createElement("select");
        selectPai.id = "pai";
        divMenu.appendChild(selectPai);

        for (var i = 0; i < pessoasMasculinas.length; i++) {
        	if(pessoasMasculinas[i].id != pessoa.id){
	            var option = document.createElement("option");
	            option.value = pessoasMasculinas[i].id;
	            if (pessoasMasculinas[i].id == pessoa.pai){
	                option.setAttribute("selected", "true")
	            }
	            option.text = pessoasMasculinas[i].id;
	            selectPai.appendChild(option);
        	}
        }

        $(selectPai).change(function(){
            pessoa.pai = parseInt(selectPai[selectPai.selectedIndex].value)
        })

        var selectMae = document.createElement("select");
        selectMae.id = "mae";
        divMenu.appendChild(selectMae);

        for (var i = 0; i < pessoasFemininas.length; i++) {
        	if(pessoasFemininas[i].id != pessoa.id){
	            var option = document.createElement("option");
	            option.value = pessoasFemininas[i].id;
	            if (pessoasFemininas[i].id == pessoa.mae){
	                option.setAttribute("selected", "true")
	            }
	            option.text = pessoasFemininas[i].id;
	            selectMae.appendChild(option);
        	}
        }

        $(selectMae).change(function(){
            pessoa.mae = parseInt(selectMae[selectMae.selectedIndex].value)
        })

    }


}

function pessoasPorGenero(genero){
	pessoasGenero = [];

	for (var i = 1; i <= lastIdPessoa; i++) {
		
		if(pessoas[i].sexo == genero){
			pessoasGenero.push(pessoas[i]);

		}
	};
	return pessoasGenero;

}


function haProbando(pessoas){
    for (pessoa in pessoas){
        if (pessoa.probando){
            return true
        }
    }
    return false
}
