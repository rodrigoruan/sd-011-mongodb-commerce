// Query 1 - Atribuir data de hoje na chave currentDate.ultimaModificação
db.produtos.updateOne(
  { nome: "Big Mac" },
  { $currentDate: { ultimaModificacao: { $type: "date" } } },
);

// Query 2 - Retornar Nome de todos os documentos em que a chave ultimaModificacao existe 
db.produtos.find(
  { ultimaModificacao: { $exists: 1 } },
  { _id: 0, nome: 1 },
);
