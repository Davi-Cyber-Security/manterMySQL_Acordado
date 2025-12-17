import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

import { manterConexao } from './service/servico.js';
import router from './routes/rotas.routes.js';

const app = express();
const PORT = process.env.PORT || 3000;


app.get('/api/cron', (req, res) => {
    manterConexao();
    res.status(200).json({ ok: true, message: 'Conexão mantida' });
});

app.use('/', router);

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor rodando na porta ${PORT}`);

    setInterval(manterConexao, 1000 * 60 * 5);
    manterConexao();
});