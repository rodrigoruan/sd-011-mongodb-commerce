// Query 1 - Atribui data de hoje na chave currentDate.ultimaModificação no sanduíche BigMac
db.produtos.updateOne(
  { nome: "Big Mac" },
  { $currentDate: { ultimaModificacao: { $type: "date" } } },
);

// Query 2 - Retorna Nome de todos os documentos em que a chave ultimaModificacao existe 
db.produtos.find(
  { ultimaModificacao: { $exists: 1 } },
  { _id: 0, nome: 1 },
);
