import { createSlice } from "@reduxjs/toolkit";

export const journalSlice = createSlice({
  name: "journal",
  initialState: {
    isSaving: false, //Para evitar dobles posteos
    messageSaved: "",
    notes: [],
    active: null,
    // active: {
    //     id: 'ABCD123',
    //     title: '',
    //     body: '',
    //     date: 123456,
    //     imageUrls: [], //https://foto1.jpg, https://foto2.jpg, https://foto3.jpg
    // }
  },
  reducers: {
    savingNewNote: (state) => {
      state.isSaving = true;
    },

    addNewEmptyNote: (state, action) => {
      state.notes.push(action.payload);
      state.isSaving = false;
    },

    setActiveNote: (state, action) => {
      state.active = action.payload;
    },

    setNotes: (state, action) => {
      state.notes = action.payload;
    },

    setSaving: (state) => {},

    updateNote: (state, action) => {},
    
    deleteNodeById: (state, action) => {},
  },
});

// Action creators are generated for each case reducer function
export const {
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
  deleteNodeById,
  savingNewNote,
} = journalSlice.actions;
