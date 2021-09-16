/* 
Requisito 5 - Adicione ketchup aos ingredientes para todos os sanduíches menos o McChicken, garantindo que não haja duplicidade nos ingredientes.

Para isso, escreva no arquivo desafio5.js duas queries, nesta ordem:

1- Crie uma query que adicione ketchup aos ingredientes para todos os sanduíches menos o McChicken, garantindo que não haja duplicidade nos ingredientes.

2- Crie uma query que retorne o nome e ingredientes de todos os documentos. 

*/

// use("commerce");
db.produtos.updateMany(
  { nome: { $ne: "McChicken" } },
  { $addToSet: { ingredientes: "ketchup" } },
);

// use("commerce");
db.produtos.find(
  {},
  { _id: 0, nome: 1, ingredientes: 1 },
);

//= ==========================================================================