// Query 1 - Retirar cebola de todos os sanduíches - chave array ingredientes 
db.produtos.updateMany(
  {}, 
  { $pull: { ingredientes: { $in: ["cebola"] } } },
);

db.produtos.find(
  {}, 
  { _id: 0, nome: 1, ingredientes: 1 },
);
