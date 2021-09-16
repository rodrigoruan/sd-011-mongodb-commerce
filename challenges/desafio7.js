// Query 1
db.produtos.updateMany(
  {},
  {
    $pull: {
      items: {
        ingredientes: { $eq: ["cebola"] },
      },
    },
  },
);

// Query 2
db.produtos.find(
  {},
  { _id: 0, nome: 1, ingredientes: 1 },
);
