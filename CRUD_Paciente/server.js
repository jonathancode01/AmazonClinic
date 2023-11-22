const express = require('express');
const mysql = require('mysql');

const app = express();
const PORT = 5500; // Alterando a porta do servidor Express

// Configurando a conexão com o banco de dados MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'Uninorte',
  password: '123456789',
  database: 'CRUD'
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conexão bem-sucedida ao banco de dados MySQL');
});

// Rota para buscar dados do banco de dados
app.get('/dados', (req, res) => {
  connection.query('SELECT * FROM sua_tabela', (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Erro ao buscar dados no banco de dados' });
      return;
    }
    res.json(results);
  });
});

// Rota padrão
app.get('/', (req, res) => {
  res.send('Olá! Esta é a página inicial.');
});

// Iniciar o servidor Express
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}: http://localhost:${PORT}`);
});
