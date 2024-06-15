import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import { fetchPosts,AddtoPosts,fetchUsers, UserLogin ,UserRegister} from "./Api";

const initialState ={
    posts:[],
    SearchUser:[],
    status:"idle"
}

export const User =createAsyncThunk(
  'user/login',async(data)=>{
    const response =await UserLogin(data);
    return response
  },
)
export const Userregister =createAsyncThunk(
  'user/register',async(data)=>{
    const response =await UserRegister(data);
    return response
  },
)

export const fetchAllposts = createAsyncThunk(
    'posts/fetchpost',
    async () => {
      const response = await fetchPosts();
      // The value we return becomes the `fulfilled` action payload
      return response.data;
    }
  );
  export const Addpost = createAsyncThunk(
    'posts/addpost',
    async ({file,caption}) => {
      const response = await AddtoPosts(file,caption);
      // The value we return becomes the `fulfilled` action payload
      return response.data;
    }
  );
  export const fetchAllser = createAsyncThunk(
    'posts/fetchpost',
    async () => {
      const response = await fetchUsers();
      // The value we return becomes the `fulfilled` action payload
      return response.data;
    }
  );

  export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
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