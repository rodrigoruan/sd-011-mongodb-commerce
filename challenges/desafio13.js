db.produtos.updateMany(
  {
    $and: [
      { "valoresNutricionais.percentual": { $gte: 40 } },
      {
        tags: { $exists: true },
      },
    ],
  },
  {
    $push: {
      tags: "muito sódio",
    },
  },
);

db.produtos.find({}, { nome: 1, tags: 1, _id: 0 });
