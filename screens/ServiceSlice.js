import { createSlice } from "redux-starter-kit";
import db from "../db";
import { allow } from "expo/build/ScreenOrientation/ScreenOrientation";

const ServiceSlice = createSlice({
  name:'All',
  initialState: {
    todos: [],
    filter: 'ALL',
  },
  reducers: {
    itemsLoaded(state, { payload }) {
      state.todos = payload;
    },
    filterChanged(state, { payload }) {
      state.filter = payload;
    }
  },
});

export const actions = ServiceSlice.actions;

export default ServiceSlice.reducer;