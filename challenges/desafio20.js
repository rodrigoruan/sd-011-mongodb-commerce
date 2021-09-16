db.produtos.updateOne(
    { nome: "Big Mac" },
  {
    $unset:
    { curtidas: 1 },
  },
);

db.produtos.find({}, { nome: 1, _id: 0, curtidas: 1 });
