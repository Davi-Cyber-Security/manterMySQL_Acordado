import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

import { manterConexao } from './service/servico.js';
import router from './routes/rotas.routes.js';

const app = express();

app.use('/', router);

setInterval(manterConexao, 1000 * 60 * 5);
manterConexao();

app.listen(process.env.PORT || 3000, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT || 3000}`);
});