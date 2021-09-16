db.produtos.updateMany(
  { $and: [ 
    { "valoresNutricionais.2.quantidade": { $gt: 20 } },
    { "valoresNutricionais.2.quantidade": { $lt: 40 } },
  ] },
  { $push: { tags: "contém sódio" } },
);
db.produtos.find({}, { nome: 1, tags: 1, _id: 0 });