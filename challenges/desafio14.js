db.produtos.updateMany(
  { $and: [ 
    { "valoresNutricionais.tipo": { $eq: "sódio" } },
    { "valoresNutricionais.quantidade": { $gt: 20 } },
    { "valoresNutricionais.quantidade": { $lt: 40 } },
  ] },
  { $push: { tags: "contém sódio" } },
);
db.produtos.find({}, { nome: 1, tags: 1, _id: 0 });