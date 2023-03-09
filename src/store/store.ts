import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import moviesReducer from "../slices/movies.slice";
import searchReducer from "../slices/search.slice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    search: searchReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
