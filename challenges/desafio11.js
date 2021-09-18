db.products.updateMany({ $push: { tags: { $each: ["combo", "tasty"] } }}, { sort: { tags: 1 } });

db.products.find({}, { _id: 0, name: 1, tags: 1 });
