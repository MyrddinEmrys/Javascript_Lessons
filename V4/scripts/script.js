//posso colocar também uma variável pra chamar todo esse "document.getElementById("btn");" 
// => melhor com variável porque se precisar posso sempre chamar ela apenas
var el01 = document.getElementById("btn01");
el01.addEventListener("click", olaMundoClick);

// document.getElementById("btn").addEventListener("click", olaMundo);
//parametros .addEventListener => (type = tipo do evento;
								// listener = objeto que recebe a notificação ou função; 
								// optional = capture, once, passive ou mozSystemGroup => Boolean)


function olaMundoClick(){
	var i = 0;
	var x = document.getElementsByClassName("txt"); // $('.txt') 
	for (i = 0; i < x.length; i ++){
		x[i].innerHTML = "Olá Mundo dos '.addEventListener' por ID.";
		console.log(x[i])
		console.log("Deu certo!")

		// document.querySelectorAll(".txt").innerHTML = "Olá Mundo dos Cliques por ID.";
		// console.log(document.querySelectorAll(".txt"))
	}

	for (i = 0; i < x.length; i ++){
		i += 1;
		x[i].style = "color: #008CBA";// Uma das formas de mudar um Style CSS
	}
}

//Manter a consistência, padronizar o código, se comecei de uma forma pra mudar um Style manter esta forma.

var el02 = document.getElementById("btn02");

el02.addEventListener("mouseover", olaMundoMouseOver);
el02.addEventListener("mouseout", olaMundoOut);

function olaMundoMouseOver(event){ // por Default o 'event' => mesma coisa q deixar em branco function()
	var i = 0;
	var y = document.getElementsByClassName("txt");

	for(i = 0; i < y.length; i ++){
		y[i].innerHTML = "Agora vamos mudar o Click por Mouse Over!";
		el02.setAttribute("style", "background-color: orange;")// Outra forma de muudar um Style CSS
	}

	for (i = 0; i < y.length; i ++){
		y[i].style = "color: #4CAF50";
		i += 1;
	}
}

function olaMundoOut(e){ // normalmente muito usado apenas com o 'e', na real voce escolhe o nome do parametro
	el02.setAttribute("style", "background-color: purple;")

	var i = 0;
	var z = document.getElementsByClassName("txt");

	for (i = 0; i < z.length; i ++){
		z[i].style = "color: #f44336";
		i += 1;
	}
}