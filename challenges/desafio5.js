db.produtos.updateMany(
  { nome: { $ne: [{ nome: "McChicken" }] }, ingredientes: { $nin: ["Ketchup"] } },
  { $push: { ingredientes: { $each: ["Ketchup"] } } },
  { upsert: true },
);

// db.produtos.updateMany(
//   { nome: { $not: { $eq: "McChicken" } }, ingredientes: { $nin: ["Ketchup"] } },
//   { $push: { ingredientes: { $each: ["Ketchup"] } } },
//   { upsert: true },
// );

db.produtos.find(
  {},
  { _id: 0, nome: 1, ingredientes: 1 },
);
