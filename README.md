# revisao-e-reforco-js
atividades de revisão e reforço de javaScript


# Atividade de revisao e reforço de JavaScript

## Sobre escopo de variaveis e constantes

- `var` : escopo global
- `let` : escopo bloco, podendo ser global dependendo de onde declarada
- `const` : escopo bloco, podendo ser global dependendo de onde declarada. obs : **obrigatorio** inicializar com algum valor.

--------

## Módulos no JavaScript

existem duas formas de uso:

- módulos CJS: mecanismo mais antigo, usa `module.exports` e `require`.

à uma constante

- módulosESM: mecanismo atual,usa `export` e `import`


**obs:** recomendavel criar na raiz o `package.json` contendo:

```json
{
    "type":"module"
}
```