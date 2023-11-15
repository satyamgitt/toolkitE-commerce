import { createSlice } from "@reduxjs/toolkit";

// made enum mechanism
export const STATUES = Object.freeze({
  IDLE: "ok",
  ERROR: "Error",
  LOADING: "Loading...",
});

const initialState = {
  data: [],
  status: STATUES.IDLE,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});

const { setProducts , setStatus } = productSlice.actions;

export default productSlice.reducer;

// Thunk (piece of code that execute in delay)

export function fetchProducts() {
  return async function fetchProductsThunk(dispatch, getState) {
    dispatch(setStatus(STATUES.LOADING));

    try {
      const url = await fetch(`https://fakestoreapi.com/products`);
      const data = await url.json();
    //   console.log(data);
      dispatch(setProducts(data));
      dispatch(setStatus(STATUES.IDLE));
    } catch (error) {
      console.log(error);
      dispatch(setStatus(STATUES.ERROR))
    }
  };
}
