db.produtos.find(
  { nome: { $regex: /^Mc/ } },
);
