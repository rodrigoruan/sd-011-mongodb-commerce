db.produtos.updateOne(
    { nome: "Cheddar McMelt" },
    { $pop: { ingredientes: true } },
);

db.produtos.find({}, { _id: false, nome: true, ingredientes: true });
