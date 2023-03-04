import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
  name: "item",
  initialState: {
    item: {},
    itemList: [],
    deleteItem: {},
  },
  reducers: {
    getItem(state, action) {},
    getItemList(state, action) {},
    postItem(state, action) {},
    deleteItem(state, action) {},
    setItem(state, action) {
      state.item = action.payload;
    },
    setItemList(state, action) {
      state.itemList = action.payload;
    },
    setDeleteItem(state, action) {
      state.deleteItem = action.payload;
    },
  },
});

export const {
  getItem,
  getItemList,
  postItem,
  deleteItem,
  setItem,
  setItemList,
  setDeleteItem,
} = itemSlice.actions;

export default itemSlice.reducer;
