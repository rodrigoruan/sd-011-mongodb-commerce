db.produtos.createIndex(
  { descricao: "text" },
  { default_language: "portuguese" }, // como especificar a linguagem do link: https://docs.mongodb.com/manual/tutorial/specify-language-for-text-index/
);

db.produtos.count({ $text: { $search: "frango hamburguer" } });