// Query 1
db.produtos.createIndex(
  { descricao: "text" },
  { default_language: "portuguese" },
 );

// Query 2
db.produtos.count(
  {
    $text: {
      $search: "frango hamburguer",
    },
  },
);
