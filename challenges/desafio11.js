db.produtos.updateMany(
  {},
  { $set: { vendasPorDia: [0, 0, 0, 0, 0, 0, 0] } },
);

db.produtos.updateOne(
  { nome: "Big Mac" },
  { $inc: { "vendasPorDia.3": 60 } },
);

db.produtos.updateMany(
  {},
  { $push: { tags: { $each: ["combo", "tasty"], $sort: 1 } } },
);

db.produtos.find(
  {},
  { _id: false, nome: true, tags: true },
); 
