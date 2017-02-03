//posso colocar também uma variável pra chamar todo esse "document.getElementById("btn");" 
// => melhor com variável porque se precisar posso sempre chamar ela apenas
var el = document.getElementById("btn");

el.addEventListener("click", olaMundo);

// document.getElementById("btn").addEventListener("click", olaMundo);
//parametros .addEventListener => (type = tipo do evento;
								// listener = objeto que recebe a notificação ou função; 
								// optional = capture, once, passive ou mozSystemGroup => Boolean)


function olaMundo(){
	var i = 0;
	var x = document.getElementsByClassName("txt"); // $('.txt') 
	for (i = 0; i < x.length; i ++){
		x[i].innerHTML = "Olá Mundo dos Cliques por ID.";
		console.log(x[i])
		console.log("Deu certo!")

		// document.querySelectorAll(".txt").innerHTML = "Olá Mundo dos Cliques por ID.";
		// console.log(document.querySelectorAll(".txt"))
	}
}