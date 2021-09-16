db.produtos.updateMany({}, { $rename: { descricao: "descricaoSite" } }, { upsert: true });

db.produtos.find({}, { nome: 1, _id: 0, descricao: 1, descricaoSite: 1 });
