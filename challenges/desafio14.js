db.produtos.updateMany({ "valoresNutricionais.percentual": { $gt: 20, $lt: 40 },
"valoresNutricionais.tipo": "sódio" },
{ $push: { tags: "contém sódio" } });
db.produtos.find({ }, { _id: 0, nome: 1, tags: 1 });
