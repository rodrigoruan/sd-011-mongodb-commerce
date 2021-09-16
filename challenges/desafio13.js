// 13 - Adicione o elemento muito sódio ao final do array tags nos produtos em que o percentual de sódio seja maior ou igual a 40.
// Para isso, escreva no arquivo desafio13.js duas queries, nesta ordem:

// Crie uma query que faça a adição do elemento muito sódio ao final do array tags nos produtos em que o percentual de sódio seja maior ou igual a 40.
db.produtos.updateMany(
  { "valoresNutricionais.percentual": { $gte: 40 } },
  { $push: { tags: { $each: ["muito sódio"] } } },
);
// Crie uma query que retorne o nome e tags de todos os documentos.
db.produtos.find({}, { nome: true, tags: true, _id: false });
