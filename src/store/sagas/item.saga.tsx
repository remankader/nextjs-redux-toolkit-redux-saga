import { call, put, takeLatest } from "redux-saga/effects";
import {
  getItem,
  getItemList,
  postItem,
  deleteItem,
  setItem,
  setItemList,
  setDeleteItem,
} from "../reducers/item-slice.reducer";
import request from "../request";

export function* itemSaga() {
  yield takeLatest(getItem.type, handleGetItem);
  yield takeLatest(postItem.type, handlePostItem);
}

export function* handleGetItem(action: any): any {
  const response = yield call(request, "item", "get", "params", action.payload);
  yield put(setItem(response));
}

export function* handlePostItem(action: any): any {
  const response = yield call(request, "item", "post", "data", action.payload);
  yield put(setItem(response));
}
