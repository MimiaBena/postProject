import { createSlice } from "@reduxjs/toolkit";
const initialState = [
    { id: '1', title: 'Learnign ...', content: ' hjk<hwd jwfldj jsfljf '},
    { id: '2', title: 'Learnign ...', content: 'lorem ips fgg'}
]

export const postsSlice = createSlice ({
    name: 'posts',
    initialState,
    reducers: {
        postAdded(state, {payload}){
            state.push(payload);
        }

    }
});

export const selectAllPosts = (state) => state.posts;
export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;