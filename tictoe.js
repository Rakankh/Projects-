// we need to have be able to click on the row with NO BUTTUN 
// we need to make a function that return once O and the other X inside the table's element
// we need to make counter to have the number of times the winner's win 
var a1 = document.getElementById("a1")
var a2 = document.getElementById("a2")
var a3 = document.getElementById("a3")

var b1 = document.getElementById("b1")
var b2 = document.getElementById("b2")
var b3 = document.getElementById("b3")

var c1 = document.getElementById("c1")
var c2 = document.getElementById("c2")
var c3 = document.getElementById("c3")

a1.addEventListener("mouseover", myFunction)









function myFunction (){
	document.getElementById("a1").innerHTML = "X <br>";
}


document.getElementById("RESET").addEventListener("click", clear());

function clear() {
  document.getElementById("demo").innerHTML = Date();
}