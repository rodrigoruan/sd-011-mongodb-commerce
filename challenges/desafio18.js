db.produtos.createIndex(
  { descricao: "text" }, 
  { default_language: "portuguese" }, // da documentação: https://docs.mongodb.com/manual/tutorial/specify-language-for-text-index/
);

db.produtos.count({ $text: { $search: "\"feito com\"" } });