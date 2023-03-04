import { combineReducers } from "@reduxjs/toolkit";
import itemSliceReducer from "./item-slice.reducer";

const reducers: any = combineReducers({
  item: itemSliceReducer,
});

export default reducers;
