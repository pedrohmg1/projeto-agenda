const express = require('express');
const app = express();
const path = require('path');
const db = require('./db/connection');
const Contato = require('./models/contato');
const PORT = 3000; 

// 1. Configurações de Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// IMPORTANTE: Servir arquivos da pasta public, mas DESATIVAR o index automático
app.use(express.static(path.join(__dirname, 'public'), { index: false }));

// 2. Conexão com o Banco [cite: 229, 231]
db.authenticate()
    .then(() => {
        console.log('Sucesso na conexão!');
        return db.sync(); 
    })
    .catch(err => console.log('Erro:', err)); 

// 3. ROTAS

// Rota principal (Cadastro)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Rota da Página de Listagem [cite: 413, 414]
app.get('/contatos', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contatos.html'));
});

// Rota para Salvar 
app.post('/add-contato', (req, res) => {
    Contato.create({
        nome: req.body.nome,
        idade: req.body.idade,
        empresa: req.body.empresa,
        email: req.body.email
    })
    .then(() => res.redirect('/contatos')) 
    .catch(err => res.status(500).send("Erro ao salvar"));
});

// API de Dados [cite: 398]
app.get('/api/contatos', (req, res) => {
    Contato.findAll({ order: [['nome', 'ASC']] })
    .then(contatos => res.json(contatos))
    .catch(err => res.status(500).json(err));
});

// Excluir [cite: 400]
app.get('/delete/:id', (req, res) => {
    Contato.destroy({ where: { id: req.params.id } })
    .then(() => res.redirect('/contatos'))
    .catch(err => res.status(500).send("Erro ao excluir"));
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});