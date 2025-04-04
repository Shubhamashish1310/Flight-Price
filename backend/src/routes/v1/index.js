import express from 'express';
import { InfoController } from '../../controllers/index.js';
const { info } = InfoController;

const router = express.Router();

router.get('/info',info)

export default router;
