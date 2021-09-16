db.produtos.updateMany({}, { $pull: { ingredientes: "cebola" } }, { upsert: true });

db.produtos.find({}, { nome: 1, _id: 0, ingredientes: 1 });
