const prompt = require('prompt-sync')();
function kysyy_sanan(){
    var sana = prompt("Syötä tutkittava sana: ");

    console.log( onko_palindromi(sana));
}
function onko_palindromi(sana){

    console.log("Sanasi on "+sana);
    var toisipai = sana.split('').reverse().join('');
    if(sana === toisipai){
        console.log("Sanasi on palindromi");
    }
    else{
        console.log("Sana ei ole palindromi");
    };
} 

console.log(kysyy_sanan());
