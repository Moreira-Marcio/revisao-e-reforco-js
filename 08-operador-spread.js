'use strict';

import { classificar } from "./modulos-esm/funcoes.js";
import {separador} from "./modulos-esm/exemplos.js";
/*sobre o operador spread
usamos o spread para espalhar dados de arrays e objetos,
o que ´pode ser util na chamada de funçoes e tambem na mesclagem  destas estruturas
*/ 

//spread em arrays

const bandas = ["yes" , "rush","pink floyd"];

const maisBandas = ["dream theater","savatage",...bandas];

console.log(bandas);
console.log(maisBandas);


separador();

// spread para espalhar parametros para uma função
console.log(classificar(...maisBandas));

separador();

