// Primeira quey:

db.produtos.updateMany(
  {},
  { 
    $set: {
      vendasPorDia: [0, 0, 0, 0, 0, 0, 0],
    },
  },
);

// Segunda quey:

db.produtos.updateOne(
  {
    nome: "Big Mac",
  },
  {
    $inc: { "vendasPorDia.3": 60 },
  },
);

// Terceira query:

db.produtos.updateOne(
  {
    tags: {
      $all: ["bovino", "pão"],
    },
  },
  {
    $inc: { "vendasPorDia.6": 120 },
  },
);

// Quarta query:

db.produtos.find(
  {},
  {
    _id: 0,
    nome: 1,
    vendasPorDia: 1,
  },
);
