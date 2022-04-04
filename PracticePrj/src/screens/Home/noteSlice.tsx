import {createSlice} from '@reduxjs/toolkit';

export default createSlice({
  name: 'noteList',
  initialState: [
    {id: 1, title: 'Note 1', time: '31/03/2022 16:53:00', data: ''},
    {id: 2, title: 'Note 2', time: '31/03/2022 16:53:00', data: ''},
  ],
  reducers: {
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
