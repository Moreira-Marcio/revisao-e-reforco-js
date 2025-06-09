'use strict';

//05 usando modulos esm

import alunos from './modulos-esm/alunos.js';
//importação de multiplos recursos/modulos usando esm

import { saudacao, clientes,separador } from  "./modulos-esm/exemplos.js";

saudacao("fulano de tal");

console.log(clientes);

separador();