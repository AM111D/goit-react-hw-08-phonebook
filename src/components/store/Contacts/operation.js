import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',

  async (_, { thunkAPI }) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      return thunkAPI(error.message);
    }
  }
);

// export const fetchContacts = () => async dispatch => {
// dispatch()}

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      console.log('Contact has been removed.');
      return response.data;
    } catch (error) {
      console.log(error.response.data);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contactData, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', contactData);
      console.log(
        `${contactData.name} has been added to the contact list successfully!`
      );
      return response.data;
    } catch (error) {
      console.log(error.response.data);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
