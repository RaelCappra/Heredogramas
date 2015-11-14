
    
 
function addPessoa(geracao){
	newgen = document.createElement("div")
	gen = document.getElementById(geracao)
	nome  = document.createElement("p")
	nome.textContent = "nome"
	newgen.setAttribute("title", "Genotipo")
	//id="draggable"
	//class="ui-widget-content"
	newgen.setAttribute("id", "id_pessoa")
	//$('#'+openaddress)
	newgen.setAttribute("class", "ui-widget-content selectable")
	newgen.appendChild(nome)
	//newgen.appendChild(nome)
	//newgen.draggable();
	//nome.setAttribute("style", "widht:30px")
	$("#"+geracao).append(newgen);
	$(".selectable").selectable();
	
	
	

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
