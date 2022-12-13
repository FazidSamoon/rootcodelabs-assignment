import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts : [],
}

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
    }
})

export const selectAllPosts = (state) => state

export const {addNewPost, loadAllPosts} = postSlice.actions
export default postSlice.reducer