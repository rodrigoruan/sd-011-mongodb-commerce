db.produtos.find({ nome: { $regex: /Mc/gi } }).count();
