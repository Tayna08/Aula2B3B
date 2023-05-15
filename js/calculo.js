//FORMAS DE CHAMAR A FUNÇÃO!

/*#######
document.querySelector("#btnSomar").addEventListener("click",somarValores);
//o # serve para "identificar" o id
//addEventListener serve pra identificar o evento que eu quero que a função seja chamada no caso o "click"
function somarValores(){
    var n1 = parseFloat(document.querySelector("#numero1").value);
    var n2 = parseFloat(document.querySelector("#numero2").value);
    var soma = n1+n2;
    document.querySelector("#resultado").value = soma;
}*/

/*#######
document.querySelector("#btnSomar").addEventListener("click", function(){
    var n1 = parseFloat(document.querySelector("#numero1").value);
    var n2 = parseFloat(document.querySelector("#numero2").value);
    var soma = n1+n2;
    document.querySelector("#resultado").value = soma;
});*/


/*########
const bSomar = document.querySelector("#btnSomar");
bSomar.addEventListener("click", function(){
    var n1 = parseFloat(document.querySelector("#numero1").value);
    var n2 = parseFloat(document.querySelector("#numero2").value);
    var soma = n1+n2;
    document.querySelector("#resultado").value = soma;
}); */

//#######
const bSomar = document.querySelector("#btnSomar");
//aki foi ciriado um link entre a const bSomar e o botão
bSomar.addEventListener("click", ()=>{
    var n1 = parseFloat(document.querySelector("#numero1").value);
    var n2 = parseFloat(document.querySelector("#numero2").value);
    somar(n1, n2);
    
}); 

//criando uma funçao para somar
function somar(p1, p2){
    var soma = p1 + p2;
    document.querySelector("#resultado").value = soma;
}

document.querySelector("#btnSomar").addEventListener("click",somarValores);

function somarValores(){
    var altura = parseFloat(document.querySelector("#altura").value);
    var peso = parseFloat(document.querySelector("#peso").value);
    var imc = peso / (altura * altura);
    document.querySelector("#resultado").value = imc;
}