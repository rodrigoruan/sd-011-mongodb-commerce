db.produtos.updateMany(
  { $nor: [{ nome: "McChicken" }, { ingredientes: "ketchup" }] },
  { $push: { ingredientes: "ketchup" } },
);

db.produtos.find(
  {},
  { _id: 0, nome: 1, ingredientes: 1 },
);
