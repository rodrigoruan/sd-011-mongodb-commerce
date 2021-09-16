db.produtos.updateMany(
    { nome: { $not: { $eq: "McChicken" } } },
    { $addToSet: { ingredientes: "ketchup" } },
    { upsert: true },
);

db.produtos.find({}, { nome: 1, _id: 0, ingredientes: 1 });
