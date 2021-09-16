/*
Requisito 3 - Adicione o campo avaliacao em todos os documentos da coleção e efetue alterações nesse campo.

Para isso, escreva no arquivo desafio3.js quatro queries, nesta ordem:

1- Crie uma query que inclua o campo avaliacao do tipo NumberInt e com o valor 0 em todos os documentos da coleção.

2- Crie uma query que incremente o valor do campo avaliacao em 5 em todos os sanduíches de carne do tipo bovino. Dica: utilize como filtro o campo tags.

3- Crie uma query que incremente o valor do campo avaliacao em 3 em todos os sanduíches de ave.

4- Crie uma query que retorne o nome e avaliacao de todos os sanduíches.
*/

// use("commerce");
db.produtos.updateMany(
  {},
  { $set: { avaliacao: NumberInt("0") } },
);

// use("commerce");
db.produtos.updateMany(
  { tags: "bovino" },
  { $inc: { avaliacao: 5 } },
);

// use("commerce");
db.produtos.updateMany(
  { tags: "ave" },
  { $inc: { avaliacao: 3 } },
);

// use("commerce");
db.produtos.find(
  {},
  {
    _id: 0,
    nome: 1,
    avaliacao: 1,
  },
);

//= ==========================================================================