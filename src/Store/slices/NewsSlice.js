
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchingnews = createAsyncThunk("NewsAPI", async (args, thunkAPI) => {
    try {
        const currentPage = thunkAPI.getState().NEWS.page;
        // const countryh = thunkAPI.getState().NEWS.country;
        // console.log('hello',countryh);
        const category = thunkAPI.getState().NEWS.category;
        console.log("The page is in fecthcing", currentPage);
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=39f5ab25eaf64995acffa99919a8900b&page=${currentPage}&pagesize=10`)
        return response.data;

    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
});

const Newsslice = createSlice({
    name: "news",
    initialState: {
        news: [],
        Original: [],
        loading: false,
        page: 1,
        totalsize: 0,
        totalpages: 0,
        country: 'us',
        error: null,
        category:''
    },
    reducers: {
        nextpage(state) {
            if (state.page < state.totalpages) {
                state.page += 1;
            }
        },
        previouspage(state) {
            if (state.page > 1) {
                state.page -= 1;
            }
        },
        settingpage(state, action) {
            state.page = action.payload;
            console.log('the page is ', state.page)
        },
        categorizing(state, action) {
            state.category = action.payload;
            console.log(state.category);
        },
        // setCountry(state, action) {
        //     state.country = action.payload;
        //     console.log('in',state.country);
        // },
        searchbar(state, action) {
            console.log(action.payload)
            if (action.payload !== '') {
                // Filtering the articles based on the search query
                let filteredArticles = state.Original.filter((article) => {
                    return (
                        (article.author && article.author.toLowerCase().includes(action.payload.toLowerCase())) ||
                        (article.title && article.title.toLowerCase().includes(action.payload.toLowerCase())) ||
                        (article.description && article.description.toLowerCase().includes(action.payload.toLowerCase()))
                    );
                });
                state.news.articles = filteredArticles;
            } else {
                // Reset the articles in the state to the original articles
                state.news.articles = [...state.Original];
            }
        }









    },
    extraReducers: {
        [fetchingnews.pending]: (state, action) => {
            state.loading = true;
        },
        [fetchingnews.fulfilled]: (state, action) => {
            state.loading = false;
            state.news = action.payload;
            state.totalsize = state.news.totalResults;
            state.totalpages = Math.ceil(state.totalsize / 10);
            console.log('pages values', state.totalpages);
            state.Original = state.news.articles.filter(article => article.urlToImage !== null);
            state.news.articles = state.Original;

            console.log(state.news.articles);
        }

        ,
        [fetchingnews.rejected]: (state, action) => {
            state.loading = false;

            state.error = action.payload;

        }
    }
});

export default Newsslice.reducer;
export const { nextpage, previouspage, categorizing, searchbar, settingpage, setCountry } = Newsslice.actions;