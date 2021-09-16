// use('commerce');
db.produtos.updateMany(
  { criadoPor: { $exists: false } },
  { $set: { criadoPor: "Ronald McDonald" } },
);

db.produtos.find(
  { },
  { nome: 1, criadoPor: 1, _id: 0 },
);
