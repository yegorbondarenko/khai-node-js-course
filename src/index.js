const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./user/user.router');
const productRouter = require('./product/product.router');

const app = express(); 

// 2. ПОТІМ НАЛАШТОВУЄМО
app.use(bodyParser.json());
app.use(userRouter);
app.use(productRouter); 
const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});