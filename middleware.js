// Логує кожен запит у консоль
function logRequest(req, res, next) {
  console.log(`Received a ${req.method} request to ${req.url}`);
  next(); // Передає естафету далі
}

// Блокує доступ до Brand C
function blockSpecialBrand(req, res, next) {
  if (req.params.brand === 'Brand C') {
    res.status(403).send('Unavailable Brand');
  } else {
    next();
  }
}

module.exports = { logRequest, blockSpecialBrand };