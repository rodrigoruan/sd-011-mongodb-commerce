// Query 1 - Adiciona contém sódio na array tags quando o percentual de sódio for entre 20 e 40
db.produtos.updateMany(
  { valoresNutricionais: 
    { $elemMatch: { tipo: "sódio", percentual: { $gt: 20, $lt: 40 } } } },
  { $push: { tags: { $each: ["contém sódio"] } } },
);

db.produtos.find(
  {}, 
  { _id: 0, nome: 1, tags: 1 },
);
