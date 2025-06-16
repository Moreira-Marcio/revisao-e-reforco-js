"use strict";

import cursos from "./modulos-esm/cursos.js";
import { separador } from "./modulos-esm/exemplos.js";

/* reduce (reduzir, redução, chegar a um resultado único)
Passa por elementos de um array e reduz a um único valor, que pode ser
uma soma, média, concatenação, etc.

A função callback recebe dois parâmetros: o acumulador (valor que é acumulado até o momento), e o valor atual (elemento do array sendo processado).*/

// Exemplo 1
const valores = [10, 5, 50, 200, 1000];
const total = valores.reduce((acumulador, valor) => acumulador + valor, 0);
console.log(total);

separador();

//exercicio 1: realize a soma dos preços de todos os cursos
//mostre log
const valorCursos = cursos.reduce(
  (acumulador, curso) => acumulador + curso.preco,
  0
);
console.log(valorCursos);

//exercicio 2: calcule a media dos preços de todos os cursos
//mostre log

//const media = valorCursos / cursos.length;
const media = cursos.reduce((acumulador, { preco }) => {
  return acumulador + preco / cursos.length;
}, 0);
console.log(media);

//exercicio 3: clacule preço total dos cursosde front-end
//mostre log
const somaDosPrecosFront = cursos
  .filter(({ categoria }) => categoria === "Front-end")
  .reduce((acumulador, { preco }) => acumulador + preco, 0);

console.log("soma dos precos dos cursos Front" + somaDosPrecosFront);
