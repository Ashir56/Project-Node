import mongoose from 'mongoose';

const Note = new mongoose.Schema({
  title: String,
  description: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  modified: String
});

export const NoteSchema = mongoose.model('notes', Note);
