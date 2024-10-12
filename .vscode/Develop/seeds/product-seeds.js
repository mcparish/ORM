const { Product } = require('../models');

const productData = [
  {
    name: 'Plain T-Shirt',
    price: 14.99,
    quantity: 14,
    category_id: 1,
  },
  {
    name: 'Running Sneakers',
    price: 90.0,
    quantity: 25,
    category_id: 5,
  },
  {
    name: 'Branded Baseball Hat',
    price: 22.99,
    quantity: 12,
    category_id: 4,
  },
  {
    name: 'Top 40 Music Compilation Vinyl Record',
    price: 12.99,
    quantity: 50,
    category_id: 3,
  },
  {
    name: 'Cargo Shorts',
    price: 29.99,
    quantity: 22,
    category_id: 2,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
