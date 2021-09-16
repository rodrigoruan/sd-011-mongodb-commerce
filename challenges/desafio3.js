db.produtos.updateMany({}, { $set: { avaliacao: NumberInt(0) } }, { upsert: true });

db.produtos.updateMany(
    { tags: "bovino" },
    { $inc: { avaliacao: 5 } },
    { upsert: true },
);

db.produtos.updateMany(
    { tags: "ave" },
    { $inc: { avaliacao: 3 } },
    { upsert: true },
);

db.produtos.find({}, { nome: 1, _id: 0, avaliacao: 1 });
