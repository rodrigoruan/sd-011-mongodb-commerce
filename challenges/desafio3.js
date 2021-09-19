db.produtos.updateMany({}, { $set: { avaliacao: NumberInt(0) } });
db.produtos.updateMany({ tags: { $all: ["bovino"] } }, { $inc: { avaliacao: +5 } });
db.produtos.updateMany({ tags: { $all: ["ave"] } }, { $inc: { avaliacao: +3 } });
db.produtos.find({}, { _id: false, nome: true, avaliacao: true });
