'use strict';

//05 usando modulos esm

import alunos from './modulos-esm/alunos.js';
//importação de multiplos recursos/modulos usando esm

import { saudacao, clientes,separador } from  "./modulos-esm/exemplos.js";

// uso de um alias/apelido para evitar o conflito e nomes
import{pessoa,livro,alunos as personagens} from "./modulos-esm/dados.js"

saudacao("fulano de tal");

console.log(clientes);

separador();


//acessando recursos do import alunos

console.log(alunos[1]);
console.log(alunos);

for(const aluno of alunos){
        console.log(alunos);
}

separador
//acessandop recursos do modulo'dados.js'
console.log(pessoa.nome);
console.log(livro);
console.log(personagens);