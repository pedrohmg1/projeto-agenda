const express = require('express');
const app = express();
const path = require('path');
const db = require('./db/connection');
const Contato = require('./models/contato');
const PORT = 3000; 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'), { index: false }));

db.authenticate()
    .then(() => {
        console.log('Sucesso na conexão!');
        return db.sync(); 
    })
    .catch(err => console.log('Erro:', err)); 

// Rota principal: Agora envia diretamente para a página de CADASTRO
app.get('/', (req, res) => {
    // Definimos que o index.html será o formulário de cadastro
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Rota para visualizar a LISTA de contatos
app.get('/contatos', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contatos.html'));
});

// Rota para Salvar o contato e redirecionar para a lista
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

// API para buscar dados
app.get('/api/contatos', (req, res) => {
    Contato.findAll({ order: [['nome', 'ASC']] })
    .then(contatos => res.json(contatos))
    .catch(err => res.status(500).json(err));
});

// Rota para Excluir
app.get('/delete/:id', (req, res) => {
    Contato.destroy({ where: { id: req.params.id } })
    .then(() => res.redirect('/contatos'))
    .catch(err => res.status(500).send("Erro ao excluir"));
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});