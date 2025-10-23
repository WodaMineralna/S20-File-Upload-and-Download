db = db.getSiblingDB("shop");

db.products.insertMany([
  {
    _id: ObjectId("68c5a0d9f45e62ed9233c5d3"),
    title: "Physical picture of a kitty",
    price: 0.99,
    description: "kitty",
    imageUrl: "images/kitty-image.jpg",
    userId: ObjectId("68c59cebf2b7f6e17ff9ea08"),
  },
  {
    _id: ObjectId("68c32686af5c529e81421f78"),
    title: "A book!",
    price: 12.99,
    description: "Funny-colored",
    imageUrl: "images/book-image.jpg",
    userId: ObjectId("68c59cebf2b7f6e17ff9ea08"),
  },
  {
    _id: ObjectId("68c32686af5c529e814266e1"),
    title: "Red apple",
    price: 2.99,
    description: "Do not combine with a pen",
    imageUrl: "images/apple-image.png",
    userId: ObjectId("68c59cebf2b7f6e17ff9ea08"),
  },
  {
    _id: ObjectId("68c495a27829b9cab975da81"),
    title: "Pen",
    price: 249.99,
    description: "Pure prestige",
    imageUrl: "images/pen-image.png",
    userId: ObjectId("68c49525baa988da36319592"),
  },
]);
