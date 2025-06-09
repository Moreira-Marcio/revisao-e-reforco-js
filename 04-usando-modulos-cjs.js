'use strict';

//04  usando modulos JS

//chamando/importando os modulos usando kcjs require
const modulosExemplos = require('./modulos-cjs/exemplos.js');


// chamando a função existenmte no modulo
modulosExemplos.minhaFuncao();

//acessndo o array atraves do modulo

console.log(modulosExemplos.clientes);
