import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import { fetchPosts,AddtoPosts,fetchUsers,fetchUserPosts} from "./Api";


const initialState ={
    posts:[],
    status:"idle"
}

export const fetchAllposts = createAsyncThunk(
    'posts/fetchpost',
    async () => {
      const response = await fetchPosts();
      return response.data;
    }
  );

  export const fetchUserposts = createAsyncThunk(
    'posts/fetchUserpost',
    async (data) => {
      const response = await fetchUserPosts(data);
      return response.data;
    }
  );

  export const Addpost = createAsyncThunk(
    'posts/addpost',
    async (data) => {
        console.log(data)
        const response = await AddtoPosts(data);
        return response.data;
    }
)

  export const fetchAlluser = createAsyncThunk(
    'posts/fetchpost',
    async () => {
      const response = await fetchUsers();
      return response.data;
    }
  );

  export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchAllposts.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetchAllposts.fulfilled, (state, action) => {
          state.status = 'idle';
          state.posts= action.payload ;
        })
        .addCase(Addpost.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(Addpost.fulfilled, (state, action) => {
          state.status = 'idle';
          console.log(action)
          state.posts(...state.posts,action.payload);
        })
    },
  });

  export default postsSlice.reducer