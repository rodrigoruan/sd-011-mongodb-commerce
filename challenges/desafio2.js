db.produtos.updateMany(
  { valorUnitario: { $exists: false } },
  { $mul: { valorUnitario: NumberDecimal("0.00") } },
);

db.produtos.find(
  {},
  { nome: 1, _id: 0, valorUnitario: 1 },
);
