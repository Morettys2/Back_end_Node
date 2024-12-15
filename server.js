
import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const app = express();

// Middleware para processar JSON
app.use(express.json());

// Endpoint para criar um novo usuário
app.post('/usuarios', async (req, res) => {
    try {
        const { email, name, age } = req.body;
        const novoUsuario = await prisma.user.create({
            data: { email, name, age },
        });
        res.status(201).json(novoUsuario);
    } catch (error) {
        res.status(400).json({ error: 'Erro ao criar usuário', detalhes: error.message });
    }
});

// Endpoint para listar todos os usuários
app.get('/usuarios', async (req, res) => {
    try {
        const usuarios = await prisma.user.findMany();
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar usuários', detalhes: error.message });
    }
});

// Endpoint para buscar um usuário por ID
app.get('/usuarios/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const usuario = await prisma.user.findUnique({
            where: { id },
        });

        if (!usuario) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }

        res.status(200).json(usuario);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar usuário', detalhes: error.message });
    }
});

// Endpoint para atualizar um usuário por ID
app.put('/usuarios/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { email, name, age } = req.body;

        const usuarioAtualizado = await prisma.user.update({
            where: { id },
            data: { email, name, age },
        });

        res.status(200).json(usuarioAtualizado);
    } catch (error) {
        res.status(400).json({ error: 'Erro ao atualizar usuário', detalhes: error.message });
    }
});

// Endpoint para deletar um usuário por ID
app.delete('/usuarios/:id', async (req, res) => {
    try {
        const { id } = req.params;

        await prisma.user.delete({
            where: { id },
        });

        res.status(204).send();
    } catch (error) {
        res.status(400).json({ error: 'Erro ao deletar usuário', detalhes: error.message });
    }
});

// Tratamento para rotas inexistentes
app.use((req, res) => {
    res.status(404).json({ message: 'Rota não encontrada' });
});

// Inicializa o servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});