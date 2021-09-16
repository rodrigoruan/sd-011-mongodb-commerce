// db.produtos.updateMany(
//   {
//     $and: [
//       { "valoresNutricionais"}
//     ]
//     valoresNutricionais: {
//       $all: [
//       { "valoresNutricionais.tipo": "sódio" },
//       { "valoresNutricionais.percentual": { $gte: 40 } }],
//     },
//   },
//   {
//     $push: {
//       tags: "muito sódio",
//     },
//   },
// );