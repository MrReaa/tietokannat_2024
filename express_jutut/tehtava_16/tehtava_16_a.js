const prompt = require('prompt-sync')();
function kysyy_luvut(){
    var num1 = prompt("Syötä ensimmäinen luku: ");
    var num2 = prompt("Syötä toinen luku: ");

    console.log( lukujen_vertailu(num1,num2));
}
function lukujen_vertailu(num1,num2){

    if (num1 > num2) {
        return num1 + " on suurempi";   
    } else {
        return num2 + " on suurempi";
    }
} 

console.log(kysyy_luvut());
