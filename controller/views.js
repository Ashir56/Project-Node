import { NoteSchema } from '../models/models.js';

export const CreateNote = (req, res) => {
  try {
    const { title, description } = req.body;
    const note = new NoteSchema({
      title,
      description
    });

    note.save();

    return res
      .status(200)
      .json({ success: true, message: 'Created Successfully' });
  } catch (err) {
    res.status(400).json(JSON.stringify(err));
  }
};

export const getAllNotes = async (req, res) => {
  try {
    const notes = await NoteSchema.find();

    return res.status(200).json({ success: true, data: notes });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
};

export const deleteNote = async (req, res) => {
  try {
    const noteId = req.query.id;

    // Check if the note exists
    const existingNote = await NoteSchema.findById(noteId);
    if (!existingNote) {
      return res
        .status(404)
        .json({ success: false, message: 'Note not found' });
    }

    // Delete the note
    await NoteSchema.findByIdAndDelete(noteId);

    return res
      .status(200)
      .json({ success: true, message: 'Deleted Successfully' });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
};

export const updateNote = async (req, res) => {
  try {
    console.log('========§2123433', req.query.id);
    const noteId = req.query.id;
    const { title, description } = req.body;
    // Check if the note exists
    const existingNote = await NoteSchema.findById(noteId);
    if (!existingNote) {
      return res
        .status(404)
        .json({ success: false, message: 'Note not found' });
    }

    // Update the note
    existingNote.title = title;
    existingNote.description = description;
    await existingNote.save();

    return res
      .status(200)
      .json({ success: true, message: 'Updated Successfully' });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
};
