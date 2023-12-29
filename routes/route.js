import express from 'express';
import {
  CreateNote,
  getAllNotes,
  deleteNote,
  updateNote
} from '../controller/views.js';

const routes = express.Router();

routes.post('/create-note', CreateNote);
routes.get('/get-all-notes', getAllNotes);
routes.delete('/delete-note', deleteNote);
routes.put('/update-note', updateNote);

export default routes;
