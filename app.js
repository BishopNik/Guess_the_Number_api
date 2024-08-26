/** @format */

import express from 'express';
import logger from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';

import router from './routes/api/router.js';

// import swaggerUi from 'swagger-ui-express';
// import swaggerDocument from './swagger.json' with { type: 'json' };

dotenv.config();

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

// Api-docs
// app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// main router
app.use('/api', router);

app.use((_req, res) => {
	res.status(404).json({ message: 'Not found' });
});

app.use((err, _req, res, next) => {
	const { status = 500, message = 'Server error' } = err;
	res.status(status).json({ message });
});

export default app;
