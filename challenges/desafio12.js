db.produtos.updateMany(
  { },
  { $push: { valoresNutricionais: { $each: [], $sort: { percentual: -1 } } } },
);

db.produtos.find(
  {},
  { nome: 1, _id: 0, valoresNutricionais: 1 },
);
