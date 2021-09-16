db.produtos.updateMany({}, { $push: { criadoPor: "Ronald McDonald" } }, { upsert: true });
db.produtos.find({}, { nome: 1, _id: 0, criadoPor: 1 });