db.produtos.updateMany({}, { $set: { avaliacao: NumberInt("0") } });

// Crie uma query que incremente o valor do campo avaliacao em 5 em todos os sanduíches
// de carne do tipo bovino. Dica: utilize como filtro o campo tags.
db.produtos.updateMany(
  { tags: { $elemMatch: { $eq: "bovino" } } },
  { $inc: { avaliacao: 5 } },
);

// Crie uma query que incremente o valor do campo avaliacao em 3 em todos os sanduíches de ave.
db.produtos.updateMany(
  { tags: { $elemMatch: { $eq: "ave" } } },
  { $inc: { avaliacao: 3 } },
);

db.produtos.find(
  {},
  {
    _id: 0,
    nome: 1,
    avaliacao: 1,
  },
);
