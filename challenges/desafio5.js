db.produtos.updateMany(
  { nome: { $exists: true, $ne: "McChicken" } },
  { $push: {
    ingredientes: "ketchup",
  } },
  {
    upsert: true,
  },
);

db.produtos.find({}, {
  _id: 0,
  nome: 1,
  ingredientes: 1,
});
