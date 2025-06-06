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

