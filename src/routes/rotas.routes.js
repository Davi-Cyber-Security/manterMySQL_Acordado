import express from 'express';

import { boasVindas } from '../service/boasVindas.js';

const router = express.Router();

router.get('/', boasVindas);

router.use((req, res) => {
    res.status(404).send('Página não encontrada!');
});

export default router;