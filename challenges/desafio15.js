// Query 1
db.produtos.count(
  {
    nome: { $regex: /mc/i },
  },
);
