import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./Slice";

export const store = configureStore({
  reducer: {
    Api: useReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
