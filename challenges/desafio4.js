db.produtos.updateMany({}, {
  $set: {
    avaliacao: NumberInt(0),
  },
});

db.produtos.updateMany({
  tags: { $in: ["bovino"] },
}, {
  $set: {
    avaliacao: NumberInt(5),
  },
});

db.produtos.find();
