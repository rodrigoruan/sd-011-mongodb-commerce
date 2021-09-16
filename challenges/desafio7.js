/* 
Requisito 7 - Remova o item cebola de todos os sanduíches.

Para isso, escreva no arquivo desafio7.js duas queries, nesta ordem:

1- Crie uma query que faça a remoção do item cebola em todos os sanduíches.

2- Crie uma query que retorne o nome e ingredientes de todos os documentos. 
*/

// use("commerce");
db.produtos.updateMany(
  {},
  { $pull: { ingredientes: "cebola" } },
);

// use("commerce");
db.produtos.find(
  {},
  { 
    _id: 0,
    nome: 1,
    ingredientes: 1,
  },
);

//= ==========================================================================
