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
    async ({ file, caption, userid }) => {
        const formData = new FormData();
        formData.append('file', file[0]); // Ensure file[0] is used to get the selected file
        formData.append('caption', caption);
        formData.append('userid', userid); // Include the user ID
        const response = await AddtoPosts(formData);
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
          state.posts.push(action.payload);
        })
    },
  });

  export default postsSlice.reducer