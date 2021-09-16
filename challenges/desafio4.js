/*
Para resolver esse Desafio consultei a documentação sobre: variáveis de agregação.
LINK: https://docs.mongodb.com/manual/reference/operator/update/currentDate/#mongodb-update-up.-currentDate
*/
db.produtos.updateOne(
    { nome: "Big Mac" },
    [
    { $set: { ultimaModificacao: "$$NOW" } },
    ],
);

db.produtos.find({ ultimaModificacao: { $exists: true } }, { nome: 1, _id: 0 });