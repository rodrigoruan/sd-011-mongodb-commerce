// Query 1 - Adiciona chave em todos os documentos
db.produtos.updateMany(
  {}, 
  { $set: { criadoPor: "Ronald McDonald" } },
  { upsert: true },
);

// Query 2 - Retorna nome e Criado por de todos os documentos
db.produtos.find(
  {}, 
  { _id: 0, nome: 1, criadoPor: 1 },
);
