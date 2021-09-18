// Query 1 - Conta produtos que possuem 4 ingredientes
db.produtos.count(
  { ingredientes: { $size: 4 } },
);
