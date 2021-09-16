// db.produtos.createIndex( { nome: "text" });

// db.produtos.updateMany(
//   { $text: { $search: "Quarteirão com Queijo" } },
//   { $pop: { ingredientes: -1 } },
// );

db.produtos.updateMany(
  { nome: "Quarteirão com Queijo" },
  { $pop: { ingredientes: -1 } },
);

db.produtos.find(
  {},
  { _id: 0, nome: 1, ingredientes: 1 },
);
// https://www.linkedin.com/pulse/pesquisas-n%C3%A3o-sens%C3%ADveis-e-acentos-mongodb-glauber-funez/