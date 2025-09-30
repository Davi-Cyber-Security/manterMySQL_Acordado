import express from 'express';

import { manterConexao } from './service/servico.js';
import router from './routes/rotas.routes.js';

const app = express();

app.use('/', router);

setInterval(manterConexao, 1000 * 60 * 5);
manterConexao();

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});