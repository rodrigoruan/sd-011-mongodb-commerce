db.produtos.updateMany(
  {},
  { $push: { criadoPor: "Ronald McDonald" } },
  { upsert: true }
);

db.produtos.find({}, { _id: 0, nome: 1, criadoPor: 1 });
