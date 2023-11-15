
db.provinces.insertOne({
  province_id: ObjectId("507f1f77bcf86cd799439011"),
  name: "Barcelona"
});

db.locality.insertOne({
  locality_id: ObjectId("507f1f77bcf86cd799439012"),
  name: "Barcelona",
  province_id: ObjectId("507f1f77bcf86cd799439011")
});
db.customer.insertOne({
  customer_id: ObjectId("507f1f77bcf86cd799439013"),
  name: "Javi",
  surname: "Peña",
  address: [
    {
      street: "Barcelona street",
      street_num: 3,
      floor: 2,
      door: "A",
      postal_code: 12345
    }
  ],
  phone_num: 1234567890,
  locality_id: ObjectId("507f1f77bcf86cd799439012")
});
db.order.insertOne({
  order_id: ObjectId("507f1f77bcf86cd799439014"),
  products_id: [ObjectId("507f1f77bcf86cd799439015")],
  date: new Date(),
  price: 99.99,
  cook: ObjectId("507f1f77bcf86cd799439016"),
  store_id: ObjectId("507f1f77bcf86cd799439017")
});
db.deliveryMan.insertOne({
  delivery_man_id: ObjectId("507f1f77bcf86cd799439018"),
  NIF: "123456789A",
  name: "Gerard",
  surnames: "Benaguero",
  address: {
    street: "Barcelona street2",
    street_num: 456,
    floor: 1,
    door: "B",
    postal_code: 54321
  },
  phone_num: 663958442,
  store: ObjectId("507f1f77bcf86cd799439017")
});
db.product.insertOne({
  product_id: ObjectId("507f1f77bcf86cd799439019"),
  name: "PizzaBBQ",
  description: "Pizza sabrosa bbq",
  image: BinData(0, "base64-encoded-image-data"),
  price: 14.99
});
db.store.insertOne({
  store_id: ObjectId("507f1f77bcf86cd799439017"),
  locality_id: ObjectId("507f1f77bcf86cd799439012"),
  address: {
    street: "Barcelona street",
    street_num: 789,
    floor: 3,
    door: "C",
    postal_code: 67890
  },
  phone_num: 1112233444
});
db.cook.insertOne({
  cook_id: ObjectId("507f1f77bcf86cd799439016"),
  NIF: "987654321B",
  name: "Pablo",
  surnames: "Isglesias",
  address: {
    street: "Cook Streetbcn",
    street_num: 321,
    floor: 2,
    door: "D",
    postal_code: 13579
  },
  phone_num: 663814555,
  store: ObjectId("507f1f77bcf86cd799439017")
});
db.orderToDelivery.insertOne({
  order_to_delivery_id: ObjectId("507f1f77bcf86cd799439020"),
  products_id: [ObjectId("507f1f77bcf86cd799439019")],
  delivery_time: new Date(),
  delivery_man_id: ObjectId("507f1f77bcf86cd799439018")
});
db.orderToTake.insertOne({
  order_to_take_id: ObjectId("507f1f77bcf86cd799439021"),
  products_id: [ObjectId("507f1f77bcf86cd799439019")]
});
db.category.insertOne({
  category_id: ObjectId("507f1f77bcf86cd799439022"),
  category: "Premium pizza"
});
db.hamburger.insertOne({
  product_id: ObjectId("507f1f77bcf86cd799439024")
});
db.drink.insertOne({
  product_id: ObjectId("507f1f77bcf86cd799439032")
});
db.pizza.insertOne({
  product_id: ObjectId("507f1f77bcf86cd799439019"),
  category_id: ObjectId("507f1f77bcf86cd799439022")
});
