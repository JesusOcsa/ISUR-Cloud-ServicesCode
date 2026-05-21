const express = require('express');
const mysql = require('mysql2');

const app = express();

const PORT = process.env.PORT || 3000;

const db = mysql.createConnection({
  host: process.env.DB_HOST || 'db',
  user: 'root',
  password: 'rootpassword',
  database: 'isurdb'
});

db.connect((err) => {
  if (err) {
    console.log('Error conectando MySQL:', err.message);
  } else {
    console.log('MySQL conectado correctamente');
  }
});

app.get('/', (req, res) => {
  res.send(`
    <h1>ISUR Cloud Services</h1>
    <p>Aplicacion funcionando correctamente</p>
  `);
});

app.get('/health', (req, res) => {
  res.send('OK');
});

app.listen(PORT, () => {
  console.log(`Servidor ejecutandose en puerto ${PORT}`);
});