const express = require('express');
const products = require('./products');
const { blockSpecialBrand } = require('./middleware');

const router = express.Router();

// 1. Отримати всі товари
router.get('/products', (request, response) => {
  return response.json(products);
});

// 2. Отримати товари за брендом (з блокуванням Brand C)
router.get('/products/:brand', blockSpecialBrand, (request, response) => {
  const { brand } = request.params;
  const filteredProducts = products.filter(product => product.brand === brand);
  response.json(filteredProducts);
});

// 3. ДОДАТКОВЕ ЗАВДАННЯ: Отримати товар за ID
router.get('/products/id/:id', (req, res) => {
   const id = parseInt(req.params.id); // Перетворюємо текст в число
   const product = products.find(p => p.id === id);

   if (product) {
       res.json(product);
   } else {
       res.status(404).send('Product not found');
   }
});

// 4. Тестовий роут для помилки
router.get('/productswitherror', (request, response) => {
  let err = new Error("processing error");
  err.statusCode = 400;
  throw err;
});

module.exports = router;