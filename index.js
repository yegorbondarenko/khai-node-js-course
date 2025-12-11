const express = require('express');
const productRoutes = require('./product.routes');
const { logRequest } = require('./middleware');
const { errorResponder } = require('./error.middleware');

const app = express();
const PORT = 3000;

// 1. Спочатку підключаємо логування (щоб бачити всі запити)
app.use(logRequest);

// 2. Потім підключаємо маршрути
app.use(productRoutes);

// 3. В самому кінці - обробник помилок
app.use(errorResponder);

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});