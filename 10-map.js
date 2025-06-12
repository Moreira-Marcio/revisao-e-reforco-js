"use strict";

import { separador } from "./modulos-esm/exemplos.js";
import cursos from "./modulos-esm/cursos.js";
// 10-map.js

/* map (mapear, mapeamento - transformar/gerar em outra coisa) 
Passa por elementos de um array e realiza operações em cada um deles
através de uma função callback, gerando um novo array de elementos 
transformados. */

// Exemplo 1
const numeros = [10, 20, 5, 12.5, 66, 50, 1000];
console.log(numeros);

//const numerosDobrados = numeros.map((numero) => {  return numero * 2;});
const numerosDobrados = numeros.map((numero) => numero * 2);

console.log(numerosDobrados);

separador();

/* mini exercicio;
1- crie um array com 5 textos escritos com letras maiusculas
2- mostre no console esse array
3- usando o map, acesse e transforme todos eles em letras minusculas(lowerCase)
4- guarde o resultado do map em uma nova consulta
5- mostre no consolle o array  */

const textos = ["BOM DIA", "BOA NOITE", "BOA TARDE", "DE BOAS", "BYE BYE"];
console.log(textos);

const exibirTexto = textos.map((texto) => texto.toLowerCase());

console.log(exibirTexto);

separador();

console.log("==lista completa de cursos ==");
console.log(cursos);
console.log("==============================");

separador();

// exemplos 2:  gerar um novo array contendo somente os titulos dos cursos

//const titulos = cursos.map((curso) => {return curso.titulo})
const titulos = cursos.map((curso) => curso.titulo);

console.log(titulos);
