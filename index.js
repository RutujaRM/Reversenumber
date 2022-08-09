/*
Write a JavaScript function that reverse a number.
Example x = 32243;
Expected Output : 34223
*/


const n = parseInt(prompt("Enter Numbers"));

function reverse_number(n)
{
	n = n + "";
	return n.split("").reverse().join("");  //Here we use inbuilt functions
}

console.log(Number(reverse_number(n)));