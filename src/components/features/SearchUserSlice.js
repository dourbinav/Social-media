import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { SearchUsers } from "./Api";

const initialState = {
  SearchUserlist: [],
  status: 'idle',
  error: null
};

export const Searchuser = createAsyncThunk(
  'SearchUser/search',
  async (data) => {
    const response = await SearchUsers(data);
    return response.data;
  }
);

const SearchUserSlice = createSlice({
  name: "searchUser",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(Searchuser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(Searchuser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.SearchUserlist = action.payload;
      })
      .addCase(Searchuser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const { addUser, removeUser } = SearchUserSlice.actions;

export default SearchUserSlice.reducer;
