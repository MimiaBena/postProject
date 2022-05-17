import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = [
    { id: '1', title: 'Learnign ...', content: ' hjk<hwd jwfldj jsfljf '},
    { id: '2', title: 'Learnign ...', content: 'lorem ips fgg'}
]

export const postsSlice = createSlice ({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: { 
            reducer(state, {payload}){
            state.push(payload);
        },
        prepare(title, content, userId) {
            return{
                payload: {
                    id: nanoid(),
                    title,
                    content
                }
            }
        }
    }
    }
});

export const selectAllPosts = (state) => state.posts;
export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;