// Query 1
db.produtos.updateMany(
  { nome: "Big Mac" },
  {
    $currentDate: {
      ultimaModificacao: true,
    },
  },
);

// Query 2
db.produtos.find(
  {
    ultimaModificacao:
      { $exists: true },
  },
  { _id: 0, nome: 1 },
);
