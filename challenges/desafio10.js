// Query 1 - Inclue um array com sete posições em todos os sanduíches - valor 0
db.produtos.updateMany(
  {}, 
  { $set: { vendasPorDia: [0, 0, 0, 0, 0, 0, 0] } },
);

// Query 2 - Incrementa as vendas de Big Mac às quartas-feiras em 60.
db.produtos.updateOne(
  { nome: "Big Mac" }, 
  { $push: { vendasPorDia: 
    { $each: [60], $position: 3, $slice: 7 }, 
    }, 
  },
);

// Query 3 -Incrementa as vendas de todos os sanduíches de carne do tipo bovino e pão aos sábados em 120.
db.produtos.updateMany(
  { tags: { $in: ["bovino", "pão"] } },
  { $push: { vendasPorDia: 
    { $each: [120], $position: 6, $slice: 7 }, 
    }, 
  },
);

db.produtos.find(
  {}, 
  { _id: 0, nome: 1, vendasPorDia: 1 },
);
