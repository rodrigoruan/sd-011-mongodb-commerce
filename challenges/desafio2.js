db.produtos.updateMany({}, { $set: { valorUnitario: NumberDecimal("0.00") } });
db.produtos.find({ criadoPor: "Ronald McDonald" }, { nome: 1, valorUnitario: 1, _id: 0 });