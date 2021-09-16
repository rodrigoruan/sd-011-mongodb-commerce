db.produtos.updateMany({ valorUnitario: { $exists: false } },
  { $set: { NumberDecimal: NumberDecimal("0.00") } });

db.produtos.find({}, { _id: 0, nome: 1, NumberDecimal: 1 });
