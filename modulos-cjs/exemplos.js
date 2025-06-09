'use strict';

function minhaFuncao(){
     console.log("Olá! Função criada em um modulo");
}

const clientes = ['Jon Oliva','David Gilmor','Floor Jansen'];

/* CJS: CommonJS */

module.exports = {minhaFuncao,clientes};