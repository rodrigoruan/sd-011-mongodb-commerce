// Query 1
db.produtos.updateMany(
  {},
  {
    $set: {
      avaliacao: NumberInt("0"),
    },
  },
);

// Query 2
db.produtos.updateMany(
  { tags: "bovino" },
  { $inc: { avaliacao: 5 } },
);

// Query 3
db.produtos.updateMany(
  { tagas: "ave" },
  { $inc: { avaliacao: 3 } },
);

// Query 4
db.produtos.find(
  {},
  { _id: 0, nome: 1, avaliacao: 1 },
);
