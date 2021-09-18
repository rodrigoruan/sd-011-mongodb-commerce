db.produtos.update({"nome": "Big Mac"}, {$set: {"ultimaModificacao": new Date()}});

db.produtos.find({ultimaModificacao: {$exists: true}});
