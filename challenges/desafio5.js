// Query 1
db.produtos.updateMany(
  { nome: { $ne: "McChicken" } },
  {
    $addToSet: {
      ingredientes: "ketchup",
    },
  },
);

// Query 2
db.produtos.find(
  {},
  { _id: 0, nome: 1, ingredientes: 1 },
);
