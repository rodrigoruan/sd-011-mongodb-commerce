// 12 - Ordene em todos os documentos os elementos do _array_ 
// `valoresNutricionais` pelo campo `percentual` de forma descendente.

// Para isso, escreva no arquivo `desafio12.js` duas queries, **nesta 
// ordem**:

// 1. Crie uma query que faça em todos os documentos a ordenação dos 
// elementos do _array_ `valoresNutricionais` pelo campo `percentual` de 
// forma descendente. Dica: mesmo sem adicionar nenhum novo elemento, para 
// essa operação é necessário utilizar também o modificador `$each`.
db.produtos.updateMany({}, { $push: {
    valoresNutricionais: {
         $each: [],
         $sort: { percentual: -1 },
    } },
});

// 2. Crie uma query que retorne o `nome` e `valoresNutricionais` de todos 
// os documentos.
db.produtos.find({}, { _id: 0, nome: 1, valoresNutricionais: 1 });