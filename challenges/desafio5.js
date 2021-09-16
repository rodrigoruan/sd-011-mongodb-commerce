// Rodolfo Rezende da turma 11 me ajudou no $addToSet

db.produtos.updateMany(
  { nome: { $ne: "McChicken" } },
  { $addToSet: {
    ingredientes: "ketchup" },
  },
);

db.produtos.find(
  { },
  { nome: 1, ingredientes: 1, _id: 0 },
);
