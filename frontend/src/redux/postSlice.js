import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllPosts } from "../api/postRequests";

const initialState = {
    posts : [],
    status: "idle",
    error: null
}

export const fetchAllPosts = createAsyncThunk("posts/fetchAll", async() => {
    const response = await getAllPosts()
    console.log(response.data);
    return response.data
})

export const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        addNewPost: (state, action) => { 
            state.posts.push(action.payload.data.data)
        },
        loadAllPosts: (state, action) => {
            action.payload.data.map((item) => state.posts.push(item))
            
        },
        getPostById: (state, action) => {
            console.log(state.posts);
            console.log("post" , state.posts.find((item) => item._id === action.payload));
            console.log("path" ,action.payload);
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchAllPosts.pending, (state, action) => {
            state.status = "loading"
        }).addCase(fetchAllPosts.fulfilled, (state, action) => {
            state.status = "succeeded"
            state.posts = state.posts.concat(action.payload)
        }).addCase(fetchAllPosts.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        });
    }
})

export const selectAllPosts = (state) => state.posts.posts;
export const getPostStatus = (state) => state.posts.status;
export const getPostsError = (state) => state.posts.error;

export const {addNewPost, loadAllPosts, getPostById} = postSlice.actions
export default postSlice.reducer