db.produtos.createIndex(
    { descricao: "text" },
    { default_language: "portuguese" },
);
// https://docs.mongodb.com/manual/tutorial/create-indexes-to-support-queries/

db.produtos.count(
    { $text: { $search: "frango hamburguer" } },
);
