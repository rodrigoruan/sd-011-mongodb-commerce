db.produtos.updateOne(
  { nome: "Big Mac" },
  { $currentDate: {
    ultimaModificacao: true,
  } },
);

db.produtos.findOne(
  { ultimaModificacao: { $exists: true } },
  { nome: 1, ultimaModificacao: 1, _id: 0 },
);
