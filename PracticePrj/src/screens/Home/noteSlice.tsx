import {createSlice} from '@reduxjs/toolkit';
import INote from '../../models/INote';

export default createSlice({
  name: 'noteList',
  initialState: [] as INote[],
  reducers: {
    createNoteList: (state, action) => {
      state.length = 0;
      state.push(action.payload);
    },
    addNewNote: (state, action) => {
      state.push(action.payload);
    },
    updateNote: (state, action) => {
      const currentNote = state.find(note => note.id === action.payload.id);
      if (currentNote) {
        currentNote.title = action.payload.title;
        currentNote.data = action.payload.data;
        currentNote.time = action.payload.time;
      }
    },
    deleteNote: (state, action) => {
      console.log('deleteNote called' + action.payload.index);
      state.splice(action.payload.index, 1);
    },
  },
});
