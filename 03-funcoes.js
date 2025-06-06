// 03 funções
'use strict'

// sintaxe tradicional, função nomeada. A ordem de declaração da função nesse caso nao importa
function exemplo1() {
    console.log("função nomeada");
}

exemplo1(); // chamada da função

function separador() {
    console.log("\n*************************************************\n");
}


separador(); // chamada da função separador

//sintaxe tradicional, função anonima. Nessa sintaxe a ordem importa

// aqui da erro por que nao pode ser posta antes da funçao ser declarada
   // exemplo2 = (); 

const exemplo2 = function() {
    console.log("função anonima");
};

exemplo2(); // chamada (sempre apos declarar a função anonima) 

separador();

// 1- crie uma função (qualquer sintaxe) que receba dois valores numericos como parametros, calcule a diferença entre esses varoles e retorne o resultado. calculado


function calcular(valor1,valor2) {
    let soma = valor1 - valor2;
    return soma;

}

//2- chame a função pelo menos duas vezes passando valores diferentes e guardando resultados em variaveis de escopo global
let resultado1 = calcular(20, 10);
let resultado2 = calcular(15, 10);

//3- apresente os resultados no console
console.log(`Resultado 1: ${resultado1}`); 
console.log(`Resultado 2: ${resultado2}`); 

separador();

// sintaxe moderna função flecha/seta(arrow function). Nesta sintaxe a ordem de declaração importa

const exemplo3 = () => {
    console.log("Arrow function");
};

exemplo3 (); //chamada deve ser feita apos a declaração

const saudacao = (nome) => {
    console.log ("ola "+nome);

};

saudacao("joao");
saudacao("alana");
saudacao("gabriel");