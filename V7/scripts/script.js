// http://www.w3resource.com/javascript-exercises/javascript-dom-exercises.php

// ==============================================================================

// 1. Here is a sample html file with a submit button. 
// Now modify the style of the paragraph text through javascript code.

var el = document.getElementById("btn");
el.addEventListener("click", function(){

    var x = document.getElementsByClassName("txt")[0];
    // getElementsByClassName trabalha com mais de um elemento, em um Array;
    // sempre debugar, dividir em partes os erros => dar log pra achar os erros;
    //como ele trabalha com um Array indicar a posição dele.

    console.log(document.getElementsByClassName("txt")[0])
    x.style.color = "blue";
    x.style.fontSize = "28px";
    x.style.fontWeight = "bold";
    x.style.fontFamily = "Verdana";
});

// ==============================================================================

// 2. Write a JavaScript function to get the values of First and Last name.
// of the following form.

function getFormvalue() {
    var x = document.getElementById("form1");
    for (var i = 0; i < x.length; i++) {
        if (x.elements[i].value != 'Submit') {
            console.log(x.elements[i].value);
        }
  }
}

// ==============================================================================

// 3. Write a JavaScript program to set the background color of a paragraph.

var el3 = document.getElementById("btn02");

el3.addEventListener("mouseover", function(){
	var y = document.getElementsByTagName("body")[0];
	var y = document.getElementsByTagName("p")[0];
	// console.log(document.getElementsByTagName("body")[0])
	// console.log(document.getElementsByTagName("p")[0])

	y.style.background = "rgb(207, 126, 0)";
	y.style.color = "purple";
});

el3.addEventListener("mouseout", function(){
	var z = document.getElementsByTagName("body")[0];
	var z = document.getElementsByTagName("p")[0];
	// console.log(document.getElementsByTagName("body")[0])
	// console.log(document.getElementsByTagName("p")[0])

	z.style.background = "rgb(25, 189, 78)";
	z.style.color = "white";
});


// ==============================================================================
