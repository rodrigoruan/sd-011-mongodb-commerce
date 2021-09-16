db.produtos.updateMany(
  { 
    $and: 
    [
      { "valoresNutricionais.tipo": "sódio" },
      { "valoresNutricionais.2.percentual": { $gte: 40 } },
    ],
  },
  {
    $push: {
      tags: "muito sódio",
    },
  },
);

db.produtos.find(
  {},
  {
    _id: 0,
    nome: 1,
    tags: 1,
  },
);
