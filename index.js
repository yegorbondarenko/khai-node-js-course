const express = require('express');
const app = express();
const port = 3000;

// Hardcoded in-memory products array (Масив товарів)
const products = [
  { id: 1, name: 'Product 1', brand: 'Brand A' },
  { id: 2, name: 'Product 2', brand: 'Brand B' },
  { id: 3, name: 'Product 3', brand: 'Brand A' }
];

// 1. Головна сторінка (handle get request)
app.get('/', (request, response) => {
  // send back a response in plain text
  response.send('response for GET request');
});

// 2. Сторінка з товарами (Route with a route parameter)
app.get('/products/:brand', (req, res) => {
  const { brand } = req.params; // Отримуємо бренд з URL

  // Фільтруємо товари по бренду
  const filteredProducts = products.filter(product => product.brand === brand);

  res.json(filteredProducts); // Відправляємо результат як JSON
});

// Запуск сервера
app.listen(port, () => console.log(`server start at http://localhost:${port}/`));