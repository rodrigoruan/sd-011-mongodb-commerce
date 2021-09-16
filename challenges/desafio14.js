db.produtos.updateMany(
  { $and: [ 
    { "valoresNutricionais.tipo": { $eq: "sódio" } },
    { "valoresNutricionais.percentual": { $gt: 20 } },
    { "valoresNutricionais.percentual": { $lt: 40 } },
  ] },
  { $push: { tags: "contém sódio" } },
);
db.produtos.find({}, { nome: 1, tags: 1, _id: 0 });