'use strict';

//05 usando modulos esm

import alunos from './modulos-esm/alunos.js';
//importação de multiplos recursos/modulos usando esm

import { saudacao, clientes,separador } from  "./modulos-esm/exemplos.js";

saudacao("fulano de tal");

console.log(clientes);

separador();


//acessando recursos do import alunos

console.log(alunos[1]);
console.log(alunos);

for(const aluno of alunos){
        console.log(alumos);
}
