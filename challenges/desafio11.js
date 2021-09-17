// Query 1 - Insere os elementos combo e tasty no array tags de todos os sanduíches eordena os elementos de tags em ordem alfabética ascendente
db.produtos.updateMany(
  {}, 
  { $push: { tags: 
    { $each: ["combo", "tasty"], $sort: 1 }, 
    }, 
  },
);

db.produtos.find(
  {}, 
  { _id: 0, nome: 1, tags: 1 },
);
