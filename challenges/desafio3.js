// Query 1 - Adiciona avaliação em todos os documentos
db.produtos.updateMany(
  {}, 
  { $set: { avaliacao: NumberInt(0) } },
  { upsert: true },
);

// Query 2 - Incrementa o valor do campo avaliação em 5 em todos os sanduíches de carne do tipo bovino
db.produtos.updateMany(
  { tags: { $in: ["bovino"] } }, 
  { $set: { avaliacao: 5 } },
);

// Query 3 - Incrementa o valor do campo avaliacao em 3 em todos os sanduíches de ave
db.produtos.updateMany(
  { tags: { $in: ["ave"] } }, 
  { $set: { avaliacao: 3 } },
);

db.produtos.find(
  {}, 
  { _id: 0, nome: 1, avaliacao: 1 },
);
