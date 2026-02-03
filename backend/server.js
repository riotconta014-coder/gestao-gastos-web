
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API rodando');
});

app.get('/gastos', (req, res) => {
  res.json([
    { id: 1, nome: "Aluguel", valor: 800 },
    { id: 2, nome: "Mercado", valor: 350 }
  ]);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

