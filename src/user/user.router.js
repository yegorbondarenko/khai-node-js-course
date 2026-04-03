const express = require('express');
const db = require('../db');
const { users } = require('../db/schema');
const router = express.Router();

router.get('/users', async (request, response) => {
   const allUsers = await db.query.users.findMany();
   return response.json(allUsers);
});

router.post('/users', async (request, response) => {
   const { body } = request;
   await db.insert(users).values(body);
   return response.sendStatus(201);
});

module.exports = router;