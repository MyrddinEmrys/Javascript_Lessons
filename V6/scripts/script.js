
//1. Write a JavaScript program to display the current day and time in the following format
// Sample Output : Today is : Friday. 
// Current time is : 4 PM : 50 : 22

document.getElementById("dt1").innerHTML = Date();

var d = new Date();
document.getElementById("dt2").innerHTML = d.toUTCString();

//========================================================================================

var today = new Date();
var day = today.getDay();
var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];
console.log("Today is : " + daylist[day] + ".");
document.getElementById("dt3").innerHTML = "Today is: " + daylist[day] + ".";

var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();
var prepand = (hour >= 12) ? " PM " : " AM ";
hour = (hour >= 12) ? hour - 12 : hour;
if (hour === 0 && prepand === ' PM ') {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = ' Noon';
    } else {
        hour = 12;
        prepand = ' PM';
    }
}
if (hour === 0 && prepand === ' AM ') {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = ' Midnight';
    } else {
        hour = 12;
        prepand = ' AM';
    }
}
console.log("Current Time : " + hour + prepand + " : " + minute + " : " + second);
document.getElementById("dt4").innerHTML = "Current Time : " + hour + prepand + " : " + minute + " : " + second

//========================================================================================

// 2. Write a JavaScript program to print the contents of the current window.

function print_current_page() {
    window.print();
}

//========================================================================================

// 3. Write a JavaScript program to get the current date.
// Expected Output : 
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy 

var today = new Date();
var dd = today.getDate();

var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();
if (dd < 10) {
    dd = '0' + dd;
}

if (mm < 10) {
    mm = '0' + mm;
}
today = mm + '-' + dd + '-' + yyyy;
console.log(today);
document.getElementById("dt5").innerHTML = today;

today = mm + '/' + dd + '/' + yyyy;
console.log(today);
document.getElementById("dt6").innerHTML = today;

today = dd + '-' + mm + '-' + yyyy;
console.log(today);
document.getElementById("dt7").innerHTML = today;

today = dd + '/' + mm + '/' + yyyy;
console.log(today);
document.getElementById("dt8").innerHTML = today;

//========================================================================================

// 4. Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7. 

var side1 = 5; 
var side2 = 6; 
var side3 = 7; 
var perimeter = (side1 + side2 + side3)/2;
var area =  Math.sqrt(perimeter*((perimeter-side1)*(perimeter-side2)*(perimeter-side3)));
console.log(area);
document.getElementById("dt9").innerHTML = today;

//========================================================================================

// 5. Write a JavaScript program to rotate the string 'TXT' in right direction by periodically 
// removing one letter from the end of the string and attaching it to the front.

function animate_string(id) {
    var element = document.getElementById(id);
    var textNode = element.childNodes[0]; // assuming no other children
    var text = textNode.data;

    setInterval(function() {
        text = text[text.length - 1] + text.substring(0, text.length - 1);
        textNode.data = text;
    }, 100);
}

//========================================================================================

// 6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.

year = window.prompt("Input a Year : ");
x = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);// o "?" e o ":" são as formas simplificadas do If (?) e Else(:)
alert(x);

//========================================================================================

// 7. Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050.

console.log('--------------------');
for (var year = 2014; year <= 2050; year++) {
    var d = new Date(year, 0, 1);
    if (d.getDay() === 0)
        document.getElementById("dt9").innerHTML = "1st January is being a Sunday  " + year;
}
console.log('--------------------');

//========================================================================================

// 8. Write a JavaScript program where the program takes a random integer between 1 to 10, 
// the user is then prompted to input a guess number. If the user input matches with guess number, 
// the program will display a message "Good Work" otherwise display a message "Not matched".

//========================================================================================

// 9. Write a JavaScript program to calculate days left until next Christmas.

//========================================================================================

// 10. Write a JavaScript program to calculate multiplication and division of two numbers 
// (input from user). Go to the editor
// Sample form : 

//========================================================================================

// 11. Write a JavaScript program to convert temperatures to and from celsius, fahrenheit.
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in celsius and f = temperature in fahrenheit ] 
// Expected Output : 
// 60°C is 140 °F
// 45°F is 7.222222222222222°C 

//========================================================================================

// 12. Write a JavaScript program to get the website URL (loading page).

//========================================================================================