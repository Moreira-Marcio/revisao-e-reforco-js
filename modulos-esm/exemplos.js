'use strict';

/*modulos esm: ecmaScript modules (sistema atual, moderno) */

function saudacao(nome) {
    console.log ("ola"+ nome+"!");

}

const clientes = ["Maycon","Gabriel","Julia"];

function separador() {
    console.log("\n*************************************************\n");
}

export {saudacao, clientes,separador};