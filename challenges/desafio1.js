db.produtos.updateMany({}, { $push: { criadoPor: "Ronald McDonald" } });

db.produtos.find({}, { _id: 0, nome: 1, criadoPor: 1 });
