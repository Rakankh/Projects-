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

a1.addEventListener("click", myFunction)
// can we make all of the table elements hidden button by css : display : none 
//then assign the X/O inside it by event listner !?

// we should add a function just like Nqueens based on arrays 
// make 3 arrays / each one includes 3 indexes 
// if ( array1[0] && array2[0] && array3[0]=== x ) alert you win 
// if ( array1[1] && array2[1] && array3[1]=== x ) alert you win
// if ( array1[2] && array2[2] && array3[2]=== x ) alert you win


// if ( array1[0] && array2[1] && array3[2]=== x ) alert you win
// if ( array1[] && array2[] && array3[]=== x ) alert you win
// if ( array1[1] && array2[1] && array3[1]=== x ) alert you win


// ma3gool ??? this way we will need so many conditionns 


function myFunction (){
	document.getElementById("a1").innerHTML = "X <br>";
}


document.getElementById("RESET").addEventListener("click", clear());

function clear() {
  document.getElementById("demo").innerHTML = Date();
}