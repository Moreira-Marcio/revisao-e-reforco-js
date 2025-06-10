# revisao-e-reforco-js

atividades de revisão e reforço de javaScript

# Atividade de revisao e reforço de JavaScript

## Sobre escopo de variaveis e constantes

- `var` : escopo global
- `let` : escopo bloco, podendo ser global dependendo de onde declarada
- `const` : escopo bloco, podendo ser global dependendo de onde declarada. obs : **obrigatorio** inicializar com algum valor.

---

## Módulos no JavaScript

existem duas formas de uso:

- módulos CJS: mecanismo mais antigo, usa `module.exports` e `require`.

à uma constante

- módulosESM: mecanismo atual,usa `export` e `import`

**obs:** recomendavel criar na raiz o `package.json` contendo:

```json
{
  "type": "module"
}
```

## sobre os operadores Rest s Spread (...)

### Operador Rest (...)

- O operador rest agrupa múltiplos argumentos de uma função em um único array. É como se ele "coletasse" todos os elementos restantes e os colocasse juntos, sendo super útil quando você não sabe quantos argumentos serão passados.

- Exemplo:

JavaScript

```js
function somarTudo(...numeros) {
  // `numeros` vira um array [1, 2, 3]
  return numeros.reduce((total, num) => total + num, 0);
}
console.log(somarTudo(1, 2, 3)); // Saída: 6
```

### Operador Spread (...)

- Já o operador spread "espalha" os elementos de um array ou objeto em um novo array, objeto ou em argumentos de função. Ele é perfeito para copiar, concatenar ou adicionar itens de forma fácil e legível.

- Exemplo:

JavaScript

```js
const array1 = [1, 2];
const array2 = [...array1, 3, 4]; // `array2` se torna [1, 2, 3, 4]

const objetoOriginal = { a: 1, b: 2 };
const objetoCopia = { ...objetoOriginal, c: 3 }; // `objetoCopia` se torna { a: 1, b: 2, c: 3 }
```
