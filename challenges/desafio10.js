db.produtos.updateMany(
{},
{ $set: { vendasPorDia: [0, 0, 0, 0, 0, 0, 0] } },
);
db.produtos.find({}, { _id: 0, nome: 1, ingredientes: 1 });