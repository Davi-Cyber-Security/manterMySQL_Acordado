import express from 'express';

import { boasVindas } from '../service/boasVindas.js';

const router = express.Router();

router.get('/', boasVindas);

export default router;