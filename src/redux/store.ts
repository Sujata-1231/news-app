import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "./newsSlice";

const store = configureStore({
    reducer: {
        news: newsReducer,
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;