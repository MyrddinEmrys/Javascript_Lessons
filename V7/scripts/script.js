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

var y = document.getElementsByTagName("p")[0];
var z = document.getElementsByTagName("p")[1];
var b = document.getElementById("btn02");
//eliminar redundâncias no código, se um variavel sera usada em varias funções no codigo,
// torne-a global então.

el3.addEventListener("mouseover", function(){
    b.setAttribute("style", "background-color: purple;")
    
    // console.log(document.getElementsByTagName("body")[0])
    // console.log(document.getElementsByTagName("p")[0])

    y.style.background = "rgb(200, 155, 226)";
    y.style.color = "purple";
    z.style.background = "rgb(200, 155, 226)";
    z.style.color = "purple";
});

el3.addEventListener("mouseout", function(){
    b.setAttribute("style", "background-color: #4CAF50;")

    // console.log(document.getElementsByTagName("body")[0])
    // console.log(document.getElementsByTagName("p")[0])
	z.style.background = "rgb(25, 189, 78)";
    z.style.color = "white";
    y.style.background = "rgb(25, 189, 78)";
	y.style.color = "white";
});

// ==============================================================================
//Kendy => JavaScript have a method like “range()” to generate an array based on supplied bounds?

var range = function(start, end, step) {
    var range = [];
    var typeofStart = typeof start;
    var typeofEnd = typeof end;

    if (step === 0) {
        throw TypeError("Step cannot be zero.");
    }

    if (typeofStart == "undefined" || typeofEnd == "undefined") {
        throw TypeError("Must pass start and end arguments.");
    }

    else if (typeofStart != typeofEnd) {
        throw TypeError("Start and end arguments must be of same type.");
    }

    typeof step == "undefined" && (step = 1);

    if (end < start) {
        step = -step;
    }

    if (typeofStart == "number") {

        while (step > 0 ? end >= start : end <= start) {
            range.push(start);
            start += step;
        }

    }

    else if (typeofStart == "string") {

        if (start.length != 1 || end.length != 1) {
            throw TypeError("Only strings with one character are supported.");
        }

        start = start.charCodeAt(0);
        end = end.charCodeAt(0);

        while (step > 0 ? end >= start : end <= start) {
            range.push(String.fromCharCode(start));
            start += step;
        }

    }

    else {
        throw TypeError("Only string and number types are supported");
    }

    return range;
}

// console.log(range("A", "Z", 1));
// console.log(range("Z", "A", 1));
// console.log(range("A", "Z", 3));


// console.log(range(0, 25, 1));

// console.log(range(0, 25, 5));
// console.log(range(20, 5, 5));

document.getElementById("exeExtra01").innerHTML = range(0, 95, 5);

//-----------------------------------------------------------------------------

var A = [];
Array.range= function(a, b, step){
    if(typeof a == 'number'){
        A[0] = a;
        step = step || 1;
        while(a + step <= b){
            A[A.length] = a += step;
        }
    }
    else{
        var s = 'abcdefghijklmnopqrstuvwxyz';
        if(a === a.toUpperCase()){
            b = b.toUpperCase();
            s = s.toUpperCase();
        }
        s = s.substring(s.indexOf(a), s.indexOf(b)+ 1);
        A = s.split('');        
    }
    return A;
}

    // Array.range(0,10);
    // [0,1,2,3,4,5,6,7,8,9,10]

    // Array.range(-100,100,20);
    // [-100,-80,-60,-40,-20,0,20,40,60,80,100]

    Array.range('A','Z');
    // ['A','B','C','D','E','F')

    // Array.range('m','r');
    // ['m','n','o','p','q','r']

document.getElementById("exeExtra02").innerHTML = A;

// ==============================================================================
