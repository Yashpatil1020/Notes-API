import express from 'express';
import { createNotes, deleteNotes, getNotes, updateNotes } from '../controllers/notes.controller.js';

const router = express.Router();

router.post('/create-note', createNotes);

router.get('/get-notes', getNotes);

router.delete('/delete-notes/:id', deleteNotes);

router.patch('/update-notes/:id',updateNotes)

export default router;