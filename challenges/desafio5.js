db.produtos.updateMany(
  { nome: { $ne: "McChicken" } },
  { $addToSet: { ingredientes: "Ketchup" } },
);

// db.produtos.updateMany(
//   { nome: { $not: { $eq: "McChicken" } } },
//   { $push: { ingredientes: { $each: ["Ketchup"] } } },
//   { upsert: true },
// );

db.produtos.find(
  {},
  { _id: 0, nome: 1, ingredientes: 1 },
);
