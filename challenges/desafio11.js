// 11 - Insira os elementos `combo` e `tasty` no _array_ `tags` de todos os 
// sanduíches e aproveite para deixar os elementos em ordem alfabética 
// ascendente. Para isso, escreva no arquivo `desafio11.js` duas queries, 
// **nesta ordem**:

// Crie uma query que faça tanto a inserção dos elementos `combo` e 
// `tasty` no _array_ `tags` de todos os sanduíches quanto a ordenação 
// dos elementos de `tags` em ordem alfabética ascendente.
db.produtos.updateMany(
    {},
    { $push: { 
        tags: { 
            $each: ["combo", "tasty"], 
            $sort: 1,
        },
    } },
    { collation: { locale: "pt" } },
);

// Crie uma query que retorne o `nome` e `tags` de todos os documentos.
db.produtos.find({}, { _id: 0, nome: 1, tags: 1 }); 

// db.produtos.updateMany(
//     {},
//     { $pull: { 
//         tags: { $in: ["combo", "tatsy"] },
//     } },
// ); esse código serve para excluir o que coloquei