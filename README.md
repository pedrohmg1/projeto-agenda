Agenda Pro - Node.js e SQLite

Uma aplicação web completa para gerenciamento de contatos.
Funcionalidades principais

    Cadastro de contatos: Permite registrar nome, idade, empresa e e-mail.

    Listagem: Exibe todos os contatos salvos em ordem alfabética.

    Busca em tempo real: Filtro para encontrar contatos rapidamente pelo nome conforme você digita.

    Exclusão: Possibilidade de remover registros da lista de forma definitiva.

    Design: Interface moderna e responsiva utilizando o framework Tailwind CSS.

Tecnologias e ferramentas

    Ambiente: Node.js

    Servidor: Express.js

    Banco de Dados: SQLite

    ORM: Sequelize (para manipulação dos objetos do banco)

    Interface: HTML5 e Tailwind CSS

Organização do projeto

    /db: Pasta onde fica a conexão e o arquivo físico do banco de dados (app.db).

    /models: Contém a definição da estrutura da tabela de contatos.

    /public: Arquivos da interface, como o formulário de cadastro e a página da lista.

    app.js: Arquivo principal que configura o servidor e todas as rotas da aplicação.

Como rodar a aplicação em sua máquina

    Clone o repositório para o seu computador.

    Abra o terminal na pasta do projeto e instale as dependências com o comando:
    npm install

    Inicie o servidor executando:
    node app.js

    Acesse o endereço abaixo no seu navegador:
    http://localhost:3000
