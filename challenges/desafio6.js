// Query 1
db.produtos.updateMany(
  {
    nome: {
      $in: ["Big Mac", "Quarteirão com Queijo"],
    },
  },
  {
    $addToSet: {
      ingredientes: "bacon",
    },
  },
);

// Query 2
db.produtos.find(
  {},
  { _id: 0, nome: 1, ingredientes: 1 },
);
