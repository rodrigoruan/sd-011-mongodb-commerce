// Query 1
db.produtos.updateMany(
  {},
  { $push: { vendasPorDia: { $each: [0, 0, 0, 0, 0, 0, 0] } } },
);

// Query 2
db.produtos.updateOne(
  { nome: "Big Mac" },
  { $inc: { "vendasPorDia.3": 60 } },
);

// Query 3
db.produtos.updateOne(
  { tags: { $all: ["bovino", "pão"] } },
  { $inc: { "vendasPorDia.6": 120 } },
);

// Query 4
db.produtos.find(
  {},
  { nome: 1, vendasPorDia: 1, _id: 0 },
);
