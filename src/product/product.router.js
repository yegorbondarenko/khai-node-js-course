const express = require('express');
const db = require('../db');
const { products } = require('../db/schema');
const { eq } = require('drizzle-orm'); // Імпортуємо eq для фільтрації
const router = express.Router();

router.post('/products', async (request, response) => {
   const { body } = request;
   await db.insert(products).values(body);
   return response.sendStatus(201);
});

router.get('/products', async (request, response) => {
   const allProducts = await db.query.products.findMany();
   return response.json(allProducts);
});

router.get('/users/:id/products', async (request, response) => {
   const { id } = request.params; // Отримуємо ID з посилання
   
   const userProducts = await db.query.products.findMany({
       where: eq(products.userId, +id) // +id перетворює текст "1" на число 1
   });
   
   return response.json(userProducts);
});

module.exports = router;