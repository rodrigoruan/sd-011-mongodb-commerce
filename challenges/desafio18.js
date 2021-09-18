db.produtos.createIndex(
  { descricao: "text" },
  { default_language: "portuguese" }
  );