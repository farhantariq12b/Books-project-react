import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./reducers/booksReducer";
import searchReducer from "./reducers/searchReducer";
import paginationReducer from "./reducers/paginationReducer";

export const store = configureStore({
  reducer: {
    book: bookReducer,
    search: searchReducer,
    pagination: paginationReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
