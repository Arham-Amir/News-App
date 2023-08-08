import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';


async function getHomeApiResponse() {
  const API_KEY = 'd3ecff1c93344d4fa426b8735a7bf793';
  const url = 'https://newsapi.org/v2/top-headlines?sources=bbc-news&' + `apiKey=${API_KEY}`
  try {
    const resp = await axios(url)
    return resp.data.articles
  } catch (e) {
    console.log(e.message)
    return null
  }
}
async function getSearchResponse(search) {
  const API_KEY = 'd3ecff1c93344d4fa426b8735a7bf793';
  const url = `https://newsapi.org/v2/everything?q=${search}&` + `apiKey=${API_KEY}`
  try {
    const resp = await axios(url)
    console.log(resp)
    return resp.data.articles
  } catch (e) {
    console.log(e.message)
    return null
  }
}

export const fetchNewsForHome = createAsyncThunk(
  'fetchNewsAsyncFunc',
  async () => {
    const resp = await getHomeApiResponse()
    return resp
  })
export const searchNews = createAsyncThunk(
  'searchNewsAsyncFunc',
  async ({ search }) => {
    const resp = await getSearchResponse(search)
    return resp
  })
export const fetchAndUpdateList = (state) => {
  state.news = state.totalNews?.slice((state.currentPage * state.newsPerPage), (state.currentPage * state.newsPerPage + state.newsPerPage));
  console.log(state.news)
}

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
    }

  },
  extraReducers: (builder) => {
    builder.addCase(fetchNewsForHome.pending, (state) => {
      state.loading = true;
    }).addCase(fetchNewsForHome.fulfilled, (state, action) => {
      state.totalNews = action.payload;
      state.totalPages = Math.ceil(action.payload.length / state.newsPerPage)
      // fetchAndUpdateList(state);
      state.loading = false;
    }),
      builder.addCase(searchNews.pending, (state) => {
        state.loading = true;
      }).addCase(searchNews.fulfilled, (state, action) => {
        state.totalNews = action.payload;
        state.totalPages = Math.ceil(action.payload.length / state.newsPerPage)
        fetchAndUpdateList(state);
        state.loading = false;
      })
  }

})

export const newsActions = newsSlice.actions;
export default newsSlice;
