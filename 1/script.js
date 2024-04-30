let altura= parseFloat(prompt("Digite a sua altura:"));
let peso= parseFloat(prompt("Digite o seu peso:"));

let imc=(peso/(altura*altura));

//document.write("Seu IMC: "+ imc);
let classeimc=
(imc<18.5) ? "Abaixo do peso normal":
(imc>=18.5 && imc<=24.9) ? "Peso normal":
(imc>=25 && imc<=29.9) ? "Excesso de peso":
(imc>=30 && imc<=34.9) ? "Obesidade classe I":
(imc>=35 && imc<=39.9) ? "Obesidade classe II":"Obesidade classe III";

document.write(classeimc);


