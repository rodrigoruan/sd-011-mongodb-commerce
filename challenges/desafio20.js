// 20 - Remova o campo curtidas do item Big Mac.
// Para isso, escreva no arquivo desafio20.js duas queries, nesta ordem:

// Crie uma query que faça a remoção do campo curtidas do item Big Mac.
db.produtos.updateOne({ nome: "Big Mac" }, { $unset: { curtidas: "" } });

// Crie uma query que retorne o nome e curtidas de todos os documentos. 
db.produtos.find({}, { nome: true, curtidas: true, _id: false });
