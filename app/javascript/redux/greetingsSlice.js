import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// export const getRandomGreeting = createAsyncThunk('greetings/fetch', () => (
//   new Promise((resolve, reject) => {
//     const options = {
//       method: 'GET',
//       url: 'http://localhost:3000/api/greeting',
//     };
//     axios.request(options)
//       .then(({ data }) => {
//         resolve(data);
//       })
//       .catch((error) => {
//         reject(error);
//       });
//   })
// ));

export const getRandomGreeting = createAsyncThunk(
  'greeting/getRandomGreeting',
  async () => {
    const res = await axios.get('http://localhost:3000/api/greeting')
     .then((response) => response.data)
     console.log(res)
     return res;
  }
)
const initialState = {
  greeting: null,
  status: 'idle',
  error: '',
};

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers:{},
  extraReducers: (builder) => {
    builder
      .addCase(getRandomGreeting.pending, (state) => ({ ...state, status: 'loading' }))
      .addCase(getRandomGreeting.fulfilled, (state, { payload }) => ({
        ...state,
        greeting: payload.greeting,
        status: 'succeed',
      }))
      .addCase(getRandomGreeting.rejected, (state, { error }) => ({
        ...state,
        error: error.message,
        status: 'failed',
      }))
  },
});

export default greetingsSlice.reducer;