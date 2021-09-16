db.produtos.updateOne(
    { nome: "Big Mac" },
    { $set: { $currentDate: { ultimaModificacao: { $type: "date" } } } },
);

db.produtos.find(
    { ultimaModificacao: { $exists: true } },
    { _id: 0, nome: 1 },
);