db.produtos.updateMany(
  {},
  {
    $push: {
      valoresNutricionais: {
        $each: [],
        $sort: { percentual: -1 },
      },
    },
  },
);

// Para esse requisito consultei esta página: https://www.geeksforgeeks.org/mongodb-sort-modifier/

db.produtos.find(
  {},
  { nome: 1, valoresNutricionais: 1, _id: 0 },
);
