import express from 'express';
import serverless from 'serverless-http';
import cors from 'cors';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API endpoints
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Bem-vindo a Glosadores e Associados!' });
});

// Adicione mais endpoints da API conforme necessário
// ...

// 404 handler para rotas de API não encontradas
app.use('/api/*', (req, res) => {
  res.status(404).json({ error: 'Endpoint não encontrado' });
});

// Erro handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Erro interno do servidor' });
});

// Exportar o handler para o Netlify Functions
export const handler = serverless(app);