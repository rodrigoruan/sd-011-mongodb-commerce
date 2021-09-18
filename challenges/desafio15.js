db.produtos.find(
  { nome: { $regex: /mc/i } },
  { _id: 0, nome: 1, ingredientes: 1 },
).count();