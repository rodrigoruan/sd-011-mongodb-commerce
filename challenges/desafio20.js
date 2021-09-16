db.produtos.updateMany(
  { nome: "Big Mac" },
  { $unset: { curtidas: "" } },
);

db.produtos.find(
  {},
  { nome: 1, _id: 0, curtidas: 1 },
);
