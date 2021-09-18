// Query 1 - Adiciona muito sódio na array tags quando o percentual de sódio for maior que 40
db.produtos.updateMany(
  { valoresNutricionais: 
    { $elemMatch: { tipo: "sódio", percentual: { $gte: 40 } } } },
  { $push: { tags: { $each: ["muito sódio"] } } },
);

db.produtos.find(
  {}, 
  { _id: 0, nome: 1, tags: 1 },
);
