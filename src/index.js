const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./user/user.router');

const app = express();
const port = 3000;

app.use(bodyParser.json()); // Навчаємо сервер розуміти JSON
app.use(userRouter);       // Підключаємо наш модуль користувачів

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});