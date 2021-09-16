// Query 1
db.produtos.updateMany(
  { nome: "Cheddar McMelt" },
  {
    $pop: { ingredientes: 1 },
  },
);

// Query 2
db.produtos.find(
  {},
  { _id: 0, nome: 1, ingredientes: 1 },
);
