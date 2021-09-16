/* 
Requisito 9 - Remova o último ingrediente do sanduíche Cheddar McMelt.

Para isso, escreva no arquivo desafio9.js duas queries, nesta ordem:

1- Crie uma query que faça a remoção do último ingrediente no sanduíche Cheddar McMelt.

2- Crie uma query que retorne o nome e ingredientes de todos os documentos. 
*/

// use("commerce");
db.produtos.updateOne(
  { nome: "Cheddar McMelt" },
  { $pop: { ingredientes: 1 } },
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