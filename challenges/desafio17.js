// Query 1 - Cria índice do tipo text no campo descricao
db.produtos.createIndex(
  { descricao: "text" }, 
  { default_language: "portuguese" },
);

// Query 2 - Conta documentos que contêm as palavras frango ou hamburguer utilizando o operador $text
db.produtos.count(
  { $text: { $search: "/frango/ /hamburguer/" } },
);
