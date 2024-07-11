import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  IAbout,
  IArticle,
  IBanner,
  IFooter,
  Ifutured,
  ISearch,
} from "./Article";

export const fetchhead = createAsyncThunk("user", async () => {
  const data = await fetch("http://localhost:5000/Header");
  return data.json();
});

export const fetchbanner = createAsyncThunk("fetchbanner", async () => {
  const banner = await fetch("http://localhost:5000/banner");
  return banner.json();
});

export const fetchfutured = createAsyncThunk("fetchfutured", async () => {
  const futured = await fetch("http://localhost:5000/Futured");
  return futured.json();
});

export const fetchfooter = createAsyncThunk("fetchfooter", async () => {
  const footer = await fetch("http://localhost:5000/Footer");
  return footer.json();
});

export const fetchAbout = createAsyncThunk("fetchAbout", async () => {
  const About = await fetch("http://localhost:5000/About");
  return About.json();
});

export const fetchSearch = createAsyncThunk("fetchSearch", async () => {
  const Search = await fetch("http://localhost:5000/Search");
  return Search.json();
});

interface IDisk {
  isloading: boolean;
  data: Array<IArticle>;
  banner: Array<IBanner>;
  futured: Array<Ifutured>;
  footer: Array<IFooter>;
  About: Array<IAbout>;
  Search: Array<ISearch>;
  error: boolean;
}

export const initialState: IDisk = {
  data: [],
  banner: [],
  futured: [],
  isloading: false,
  footer: [],
  About: [],
  Search: [],
  error: false,
};

export const Slice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchhead.pending, (state, action) => {
      state.isloading = true;
    });
    builder.addCase(fetchhead.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(fetchbanner.fulfilled, (state, action) => {
      state.banner = action.payload;
    });
    builder.addCase(fetchfutured.fulfilled, (state, action) => {
      state.futured = action.payload;
    });
    builder.addCase(fetchfooter.fulfilled, (state, action) => {
      state.footer = action.payload;
    });
    builder.addCase(fetchAbout.fulfilled, (state, action) => {
      state.About = action.payload;
    });
    builder.addCase(fetchSearch.fulfilled, (state, action) => {
      state.Search = action.payload;
    });
    builder.addCase(fetchhead.rejected, (state, action) => {
      state.error = true;
    });
  },
});
export default Slice.reducer;
