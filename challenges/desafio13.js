db.produtos.updateMany(
  { "valoresNutricionais.2.percentual": { $gte: 40 } },
  { $push: { tags: "contém sódio" } },
);

db.produtos.find(
  {},
  { _id: 0, nome: 1, tags: 1 },
);