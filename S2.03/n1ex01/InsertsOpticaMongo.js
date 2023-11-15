db.supplier.insertOne({
  supplier_id: ObjectId("527f1f77bcf86cd799439011"),
  address: {
    country: 'Country',
    city: 'City',
    street: 'Street',
    street_number: 789,
    floor: 4,
    door: 'C',
    postal_code: 67890
  },
  name: 'Alco',
  fax: 663842558,
  supplier: 'Supplier1',
  phone: 863842558,
  brands: [
    {
      brand_id: ObjectId("967f1f77bcf86cd799439011"),
      name: 'Affelou'
    }
  ],
  nif: 'A29268166'
});

db.buyer.insertOne({
  buyer_id: ObjectId("587f1f77bcf86cd799439011"),
  address: {
    country: 'Country',
    city: 'City',
    street: 'Street',
    street_number: 456,
    floor: 3,
    door: 'B',
    postal_code: 54321
  },
  phone: 663842558,
  email: 'buyer@example.com',
  register_date: new Date(),
  referal_buyer_id: ObjectId(null)
});

db.seller.insertOne({
  seller_id: ObjectId("507f1f77bcf86cd799439011"),
  address: {
    country: 'Country',
    city: 'City',
    street: 'Street',
    street_number: 123,
    floor: 2,
    door: 'A',
    postal_code: 12345
  },
  phone: 1234567890,
  email: 'seller@example.com',
  bills: [
    {
      bill_id: ObjectId("257f1f77bcf86cd799439011"),
      glasses: [
        {
          glasses_id: ObjectId("333f1f77bcf86cd799439011"),
          model: 'GL55',
          graduationR: 2.5,
          graduationL: 2.4,
          frame: 'Frame1',
          frame_colour: 'Black',
          glass_colour: 'Clear',
          price: 99.99,
          brand_id: ObjectId("967f1f77bcf86cd799439011")
        }
      ],
      date: new Date(),
      buyer_id: ObjectId("587f1f77bcf86cd799439011")
    }
  ]
});


db.glasses_not_sold.insertOne({
  glasses_id: ObjectId("955f1f77bcf86cd799439011"),
  model: 'GL55',
  graduationL: 1.5,
  graduationR: 2.4,
  frame: 'FrameNotSold',
  frame_colour: 'Brown',
  glass_colour: 'Sunset',
  price: 79.99,
  brand_id: ObjectId("967f1f77bcf86cd799439011")
});
