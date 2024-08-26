/** @format */

import { Router } from 'express';

import { isEmptyBody, validateBody } from '../../middlewares/index.js';
import { ctrlWrapper } from '../../utils/ctrlWrapper.js';
import { startGame, checkNumber } from '../../controllers/index.js';
import { statusGameSchema, userNumberSchema } from '../../models/index.js';

const router = Router();

router.post('/start_game', isEmptyBody, validateBody(statusGameSchema), ctrlWrapper(startGame));

router.post('/guess', isEmptyBody, validateBody(userNumberSchema), ctrlWrapper(checkNumber));

export default router;
