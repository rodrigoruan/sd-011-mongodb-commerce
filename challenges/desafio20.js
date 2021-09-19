db.produtos.update({ nome: "Big Mac" }, { $unset: { curtidas: 1 } });

db.products.find({}, { _id: 0, name: 1, likes: 1 });
