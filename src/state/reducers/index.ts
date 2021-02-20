import { combineReducers } from "redux";
import repositoriesReducer from "./repositoriesReducer";

const reducers = combineReducers({
  repositories: repositoriesReducer,
});

export default reducers;
//https://react-redux.js.org/using-react-redux/static-typing#typescript
//// rootReducer.ts
// export const rootReducer = combineReducers({
//   posts: postsReducer,
//   comments: commentsReducer,
//   users: usersReducer
// })
// export type RootState = ReturnType<typeof rootReducer>
// {posts: PostsState, comments: CommentsState, users: UsersState}
export type RootState = ReturnType<typeof reducers>;
