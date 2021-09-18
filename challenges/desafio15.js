// Query 1 - Conta produtos que tem mc no nome
db.produtos.count(
  { nome: { $regex: /mc/i } },
);
