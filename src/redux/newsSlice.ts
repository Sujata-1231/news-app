import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface NewsState {
    news: any[];
    status: "idle" | "loading" | "succeeded" | "failed";
}

const initialState: NewsState = {
    news: [],
    status: "idle",
};

const API_KEY = "0f9e85f48dce44d8982bdb07aa83a23b";

export const fetchNews = createAsyncThunk(
    "news/fetchNews",
    async (
        params: {
            query: string;
            page?: number;
            useEverything?: boolean;
            append?: boolean;
        },
    ) => {
        const { query, useEverything = false, page = 1 } = params;
        const pageSize = 10;

        const endpoint = useEverything
            ? `https://newsapi.org/v2/everything?q=${query}&page=${page}&pageSize=${pageSize}&apiKey=${API_KEY}`
            : `https://newsapi.org/v2/top-headlines?q=${query}&country=us&category=general&page=${page}&pageSize=${pageSize}&apiKey=${API_KEY}`;

        const response = await axios.get(endpoint);

        return {
            articles: response.data.articles,
            append: params.append || false,
        };
    }
);

const newsSlice = createSlice({
    name: "news",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchNews.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchNews.fulfilled, (state, action) => {
                state.status = "succeeded";
                const { articles, append } = action.payload;
                state.news = append ? [...state.news, ...articles] : articles;
            })
            .addCase(fetchNews.rejected, (state) => {
                state.status = "failed";
            });
    },
});

export default newsSlice.reducer;
