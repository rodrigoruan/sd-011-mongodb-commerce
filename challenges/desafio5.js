db.produtos.updateOne(
  { nome: { $ne: "McChicken" } },
  { $addToSet: { ingredientes: "Ketchup" } },
);

db.produtos.find(
  {},
  { _id: 0, nome: 1, ingredientes: 1 },
  );
  
  // db.produtos.updateOne(
  //   { nome: { $not: { $eq: "McChicken" } } },
  //   { $push: { ingredientes: { $each: ["Ketchup"] } } },
  //   { upsert: true },
  // );