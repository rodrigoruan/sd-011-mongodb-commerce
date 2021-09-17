// Query 1
db.produtos.updateMany(
  {},
  {
    $push: {
      tags: {
        $each: ["combo", "tasty"],
        $sort: 1,
      },
    },
  },
);

// Query 2
db.produtos.find(
  {},
  { _id: 0, nome: 1, tagas: 1 },
);
