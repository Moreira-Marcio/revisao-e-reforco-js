'use struict';

const maiusculoConvert = texto => texto.toUpperCase();


const minusculoConvert = texto => texto.toLowerCase();



const formatMoeda = (valor, moeda = 'BRL', locale = 'pt-BR') => valor.toLocaleString(locale,{
    style: 'currency',
    currency: moeda});


//export {maiusculoConvert, minusculoConvert,formatMoeda}

//usamos o rest operator para obter uma lista de paorametro, não importando a quantidade
export function classificar(...texto){
    return texto.sort();
}