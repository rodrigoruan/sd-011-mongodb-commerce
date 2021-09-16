db.produtos.updateMany(
  {
    valoresNutricionais: { $elemMatch: {
      tipo: "sódio",
      $and: [{ percentual: { $lt: 40 } }, { percentual: { $gt: 20 } }],
    } },
  },
  { $push: { tags: "contém sódio" } },
);
db.produtos.find(
  {},
  { _id: 0, nome: 1, tags: 1 },
);