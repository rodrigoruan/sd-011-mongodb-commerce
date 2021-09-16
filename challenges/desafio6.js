// Query 1 - Inclui bacon na lista de ingredientes dos sanduíches Big Mac e Quarteirão com Queijo
db.produtos.updateMany(
  { nome: { $in: ["Big Mac", "Quarteirão com Queijo"] } }, 
  { $push: { ingredientes: "bacon" } }, 
);

db.produtos.find(
  {}, 
  { _id: 0, nome: 1, ingredientes: 1 },
);
