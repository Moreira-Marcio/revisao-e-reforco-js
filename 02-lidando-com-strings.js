//02- lidando com strings

'use strict';

let nome= "chapolin";
let sobrenome = "Colorado";
let idade = 20;
let cidade = "São Paulo";
let estado = "SP";

//concatenação tradicional usa o operador + meu nome é chapolin colorado, tenho 20 anos, moro em são paulo/sp

let mensagem1 = "Meu nome é " + nome + " "+sobrenome + ", tenho" + " " + idade + " anos, moro em " + cidade + "/" + estado + ".";
 
console.log(mensagem1);
//template strings/literal 