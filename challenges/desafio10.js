db.produtos.updateMany({}, { $set: { vendasPorDia: [0, 0, 0, 0, 0, 0, 0] } });
db.produtos.update({ nome: "Big Mac" }, { $set: { "vendasPorDia.3": 60 } });
db.produtos.update({ "tags": "pão", tags: "bovino" }, { $set: { "vendasPorDia.7": 120 } });
db.produtos.find({}, { nome: 1, vendasPorDia: 1, _id: 0 });