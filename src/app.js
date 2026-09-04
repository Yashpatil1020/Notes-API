import express from 'express';
import notesroutes from './routes/notes.routes.js';

const app = express();

app.use(express.json());

app.use('/api/notes', notesroutes)

export default app;