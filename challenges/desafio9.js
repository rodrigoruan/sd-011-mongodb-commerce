db.produtos.update({ name: { $eq: "Cheddar McMelt" } }, { $pop: { ingredients: 1 } });

db.produtos.find({}, { _id: 0, name: 1, ingredients: 1 });
