/* 
Requisito 19 - Renomeie o campo descricao para descricaoSite em todos os documentos.

Para isso, escreva no arquivo desafio19.js duas queries, nesta ordem:

1- Crie uma query que faça a renomeação do campo descricao para descricaoSite em todos os documentos.

2- Crie uma query que retorne o nome, descricao e descricaoSite de todos os documentos.
*/

// use("commerce");
db.produtos.updateMany(
  {},
  { $rename: { descricao: "descricaoSite" } },
);

// use("commerce");
db.produtos.find(
  {},
  { 
    _id: 0,
    nome: 1,
    descricaoSite: 1,
  },
);

// ==========================================================================