'use restrict'
//07 operador rest
import {classificar} from './modulos-esm/funcoes';

/*Sobre o rest...
usamos o rest para mesclar uma relação de parametros/argumentospara uma função*/

function somar(...valores){
 //   return valor1 + valor2;
 //variavel acumuladora
 

 //interação para somar e guardar o total
 for (const valor of valore){
    total += valor;
 } 

 return total;
}

let resultado1= somar (10,20);
let resultado2 = somar(10,20,30);

console.log (resultado2);


console.log("-------------------------------------------------------------");

console.log(classificar("banana","maçã","amora","uva"));
console.log(classificar(
    "yes","guns","pink floyd","slayer","metalica","iron maiden"
));