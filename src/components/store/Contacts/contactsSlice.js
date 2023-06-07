import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operation';
import operations from '../Auth/authOperation';

const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    contactExists(state, action) {
      const { payload } = action;
      const existingContact = state.contacts.find(
        contact => contact.name === payload.name
      );
      if (existingContact) {
        console.log('Контакт с таким именем уже существует:', existingContact);
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(operations.logOut.fulfilled, (state, action) => {
        state.contacts = [];
      })
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts.push(action.payload);
      })
      .addCase(deleteContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts = state.contacts.filter(el => el.id !== action.payload);
        window.location.reload();
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { contactExists } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
