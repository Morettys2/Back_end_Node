Projeto de Estudo: Node.js, Prisma, Express e MongoDB

Este projeto foi desenvolvido com o objetivo de estudar a integração entre Node.js, Prisma, Express e MongoDB. Ele implementa uma API REST simples para gerenciar usuários, permitindo operações básicas de CRUD (Create, Read, Update, Delete).

Tecnologias Utilizadas

Node.js: Plataforma de execução de código JavaScript no servidor.

Express: Framework minimalista para criar servidores web.

Prisma: ORM moderno para facilitar a interação com bancos de dados.

MongoDB: Banco de dados NoSQL utilizado neste projeto.

Configuração do Ambiente

Pré-requisitos

Certifique-se de ter instalado em sua máquina:

Node.js (v16 ou superior)

MongoDB em execução (local ou em um serviço como MongoDB Atlas)

Prisma CLI

Passos para Configuração

Clone este repositório:

git clone https://github.com/seu-usuario/Back_end_Node
cd Back_end_Node

Instale as dependências:

npm install

Configure o Prisma:

Atualize o arquivo prisma/schema.prisma com sua string de conexão do MongoDB.

Execute o comando para gerar os artefatos do Prisma:

npx prisma generate

Execute as migrações (se necessário):

npx prisma db push

Inicie o servidor:

npm start

O servidor estará disponível em http://localhost:3000.