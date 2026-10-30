const express = require('express');

const app = express();

function total(precio, cant, desc) {
  return precio * cant * (1 - desc);
}

app.get('/total', (req, res) => {
  const importe = total(Number(req.query.p), Number(req.query.c), 0);
  res.json({ total: importe });
});

if (require.main === module) {
  app.listen(3000, () => console.log('Tienda disponible en http://localhost:3000'));
}

module.exports = { app, total };
