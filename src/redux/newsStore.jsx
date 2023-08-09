import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchAndUpdateList = (state) => {
  state.news = state.totalNews?.slice((state.currentPage * state.newsPerPage), (state.currentPage * state.newsPerPage + state.newsPerPage));
  console.log(state.news)
}

async function getApiResponse(apiUrl) {
  const API_KEY = 'd3ecff1c93344d4fa426b8735a7bf793';
  const url = apiUrl + `apiKey=${API_KEY}`
  try {
    const resp = await axios(url)
    return resp.data.articles
  } catch (e) {
    console.log(e.message)
    return null
  }
}

export const fetchNewsForHome = createAsyncThunk(
  'fetchNewsAsyncFunc',
  async () => {
    // https://newsapi.org/v2/everything?q=Apple&from=2023-08-09&sortBy=popularity
    const url = 'https://newsapi.org/v2/top-headlines?sources=bbc-news&'
    const resp = await getApiResponse(url)
    return resp
  })
export const searchNews = createAsyncThunk(
  'searchNewsAsyncFunc',
  async ({ search }) => {
    const url = `https://newsapi.org/v2/everything?q=${search}&`;
    const resp = await getApiResponse(url)
    return resp
  })
export const searchTechnologyNews = createAsyncThunk(
  'searchTechNewsAsyncFunc',
  async () => {
    const url = `https://newsapi.org/v2/everything?q=${'technology'}&`;
    const resp = await getApiResponse(url)
    return resp
  })
export const searchBusinessNews = createAsyncThunk(
  'searchBusinessNewsAsyncFunc',
  async () => {
    const url = `https://newsapi.org/v2/everything?q=${'business'}&`;
    const resp = await getApiResponse(url)
    return resp
  })
export const searchSportsNews = createAsyncThunk(
  'searchSportsNewsAsyncFunc',
  async () => {
    const url = `https://newsapi.org/v2/everything?q=${'sports'}&`;
    const resp = await getApiResponse(url)
    return resp
  })

const newsSlice = createSlice({
  name: 'NewsAppSlice',
  initialState: {
    loading: false,

    currentPage: 0,
    totalPages: 0,
    newsPerPage: 10,
    news: null,
    totalNews: null,
  },
  reducers: {
    nextPage: (state) => {
      state.currentPage != state.totalPages - 1 && (state.currentPage = state.currentPage + 1);
    },
    previousPage: (state) => {
      state.currentPage != 0 && (state.currentPage = state.currentPage - 1);
    },
    firstPage: (state) => {
      state.currentPage = 0;
    },
    lastPage: (state) => {
      state.currentPage = state.totalPages - 1;
    },
    UpdateListOnPageChange: (state) => {
      fetchAndUpdateList(state);
    },
    setLoader: (state) => {
      state.loading = true;
    },
    resetCurrentPageNumber: (state) => {
      state.currentPage = 0;
    }

  },
  extraReducers: (builder) => {
    builder.addCase(fetchNewsForHome.pending, (state) => {
      state.loading = true;
    }).addCase(fetchNewsForHome.fulfilled, (state, action) => {
      state.totalNews = action.payload;
      state.totalPages = Math.ceil(action.payload.length / state.newsPerPage)
      fetchAndUpdateList(state);
      state.loading = false;
    })
    builder.addCase(searchNews.pending, (state) => {
      state.loading = true;
    }).addCase(searchNews.fulfilled, (state, action) => {
      state.totalNews = action.payload;
      state.totalPages = Math.ceil(action.payload.length / state.newsPerPage)
      fetchAndUpdateList(state);
      state.loading = false;
    })
    builder.addCase(searchTechnologyNews.pending, (state) => {
      state.loading = true;
    }).addCase(searchTechnologyNews.fulfilled, (state, action) => {
      state.totalNews = action.payload;
      state.totalPages = Math.ceil(action.payload.length / state.newsPerPage)
      fetchAndUpdateList(state);
      state.loading = false;
    })
    builder.addCase(searchBusinessNews.pending, (state) => {
      state.loading = true;
    }).addCase(searchBusinessNews.fulfilled, (state, action) => {
      state.totalNews = action.payload;
      state.totalPages = Math.ceil(action.payload.length / state.newsPerPage)
      fetchAndUpdateList(state);
      state.loading = false;
    })
    builder.addCase(searchSportsNews.pending, (state) => {
      state.loading = true;
    }).addCase(searchSportsNews.fulfilled, (state, action) => {
      state.totalNews = action.payload;
      state.totalPages = Math.ceil(action.payload.length / state.newsPerPage)
      fetchAndUpdateList(state);
      state.loading = false;
    })

  }

})

export const newsActions = newsSlice.actions;
export default newsSlice;
