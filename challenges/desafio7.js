db.products.updateMany({},
    { $pull: { ingredients: "cebola" },
});

db.produtos.find({}, { _id: false, nome: true, ingredients: true });
