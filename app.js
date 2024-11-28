import express from 'express';
import { json } from 'body-parser';
import cors from 'cors';
import routes from './routes/index';

const app = express();

app.use(cors());
app.use(json());
app.use('/api', routes);

export default app;
