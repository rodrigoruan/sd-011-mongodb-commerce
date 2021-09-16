// use('commerce');

db.produtos.count({ nome: { $regex: /mc/i } });