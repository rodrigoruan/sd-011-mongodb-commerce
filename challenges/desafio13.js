db.produtos.updateMany({ "valoresNutricionais.percentual": { $gte: 40 },
"valoresNutricionais.tipo": "sódio" },
{ $push: { tags: "muito sódio" } });
db.produtos.find({ }, { _id: 0, nome: 1, tags: 1 });
