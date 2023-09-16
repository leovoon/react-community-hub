import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RepositoriesState } from "./types";
import { Repository } from "../repository/types";

const initialState: RepositoriesState = {
  loading: false,
  error: null,
  data: [],
  page: 1,
  pageSize: 10,
  searchQuery: "",
};

const repositoriesSlice = createSlice({
  name: "repositories",
  initialState,
  reducers: {
    getRepositoriesAction(state) {
      state.loading = true;
    },
    getRepositoriesSuccessAction(state, action: PayloadAction<Repository[]>) {
      state.loading = false;
      state.error = null;
      state.data = action.payload;
    },
    getRepositoriesFailureAction(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    searchRepositoriesAction(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },
  },
});

export const {
  getRepositoriesAction,
  getRepositoriesFailureAction,
  getRepositoriesSuccessAction,
  searchRepositoriesAction,
} = repositoriesSlice.actions;

export const selectRepositoriesState = (state: {
  repositories: RepositoriesState;
}) => state.repositories;

export default repositoriesSlice.reducer;
