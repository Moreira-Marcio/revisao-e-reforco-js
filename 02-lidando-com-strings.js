//02- lidando com strings

'use strict';

let nome= "chapolin";
let sobrenome = "Colorado";
let idade = 20;
let cidade = "São Paulo";
let estado = "SP";

//concatenação tradicional usa o operador + meu nome é chapolin colorado, tenho 20 anos, moro em são paulo/sp

//let mensagem1 = "Meu nome é " + nome + " "+sobrenome + ", tenho" + " " + idade + " anos, moro em " + cidade + "/" + estado + ".";
 
let mensagem1= "meu nome é "+ nome;
mensagem1 += " " + sobrenome + ", tenho " + idade;
mensagem1 += " anos, moro em " + cidade;
mensagem1 += "/" + estado + ".";


console.log(mensagem1);
//template strings/literal 

let mensagem2 = `meu nome é ${nome} ${sobrenome} , tenho ${idade} anos, moro em ${cidade}/${estado}.Sou ${idade>=18 ? "maior" : "menor"} de idade.`;

console.log(mensagem2); 