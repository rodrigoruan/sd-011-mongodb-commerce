// Query 1 - Remove o primeiro ingrediente(indefinido - definido pela posição -pop) do sanduíche Quarteirão com Queijo
db.produtos.updateOne(
  { nome: "Quarteirão com Queijo" },
  { $pop: { ingredientes: -1 } },
);

db.produtos.find(
  {}, 
  { _id: 0, nome: 1, ingredientes: 1 },
);
