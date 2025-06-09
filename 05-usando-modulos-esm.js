'use strict';

//05 usando modulos esm

import alunos from './modulos-esm/alunos.js';
//importação de multiplos recursos/modulos usando esm

import { saudacao, clientes,separador } from  "./modulos-esm/exemplos.js";

// uso de um alias/apelido para evitar o conflito e nomes
import{pessoa,livro,alunos as personagens} from "./modulos-esm/dados.js"

import { maiusculoConvert,minusculoConvert, formatMoeda} from './modulos-esm/funcoes.js';


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

/*exercicio
1- crie um arquivo chamado "funcoes.js"dentro da pasta "modulos esm"
2- dentro dele, programe 3 funções(usando arrow function):

   - converter caracterez para maiusculo
   - converter caracteres para minusculo
   -formatar valor em moeda brasileira
   
3- exporte-as como modulos
4- no arquivo 05 importe ultilize estas funcoes passando textos e valores para testes  */

console.log(maiusculoConvert('vai corinthians'));
console.log(minusculoConvert('QUALQUER COISA'));
console.log(formatMoeda(3500))
