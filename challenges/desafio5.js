db.produtos.updateMany(
    { nome: { $not: /McChicken/ } },
    { $addToSet: { ingredients: { $each: ["ketchup"] } } },
);

db.produtos.find({}, { _id: false, nome: true, ingredients: true });
