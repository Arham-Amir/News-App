import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';


async function getResponse() {
  const API_KEY = 'd3ecff1c93344d4fa426b8735a7bf793';
  const url = 'https://newsapi.org/v2/everything?domains=wsj.com&' + `apiKey=${API_KEY}`
  try {
    const resp = await axios(url)
    return resp.data.articles
  } catch (e) {
      console.log(e.message)
      return null
  }
}

export const fetchNews = createAsyncThunk(
  'fetchNewsAsyncFunc',
  async () => {
    const resp = await getResponse()
    console.log(resp)
    return resp
  })

const newsSlice = createSlice({
  name: 'NewsAppSlice',
  initialState: {
    loading: false,

    currentPage: 1,
    totalPage: 0,
    newsPerPage : 10,
    news: null
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNews.pending, (state) => {
      state.loading = true;
    }).addCase(fetchNews.fulfilled, (state, action) => {
      state.news = action.payload?.slice((state.currentPage*state.newsPerPage), (state.currentPage*state.newsPerPage + 10));
      console.log(state.news)
      state.loading = false;
    })
  }

})

export const newsActions = newsSlice.actions;
export default newsSlice;
