import { configureStore} from "@reduxjs/toolkit";
import postsReducer from '../feature/posts.slice';
import usersReducer from '../feature/users.slice';


export default  configureStore ({
    reducer: {
      posts: postsReducer,
      users: usersReducer
    }
})