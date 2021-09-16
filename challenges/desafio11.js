db.produtos.updateMany({}, {
  $push: {
    ingredientes: {
      $each: ["combo", "tasty"],
    },
  },
});

db.produtos.find({}, {
  _id: 0,
  nome: 1,
  tags: 1,
});
