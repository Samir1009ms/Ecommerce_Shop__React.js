import { createSlice } from "@reduxjs/toolkit";

const addToCart = createSlice({
  name: "shop",
  initialState: {
    cart: localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [],
    axtar: [],
    data: [],
    info: localStorage.getItem("info")
      ? JSON.parse(localStorage.getItem("info"))
      : [],
  },

  reducers: {
    getDatax: (state, action) => {
      state.data = action.payload;
    },

    addCart: (state, action) => {
      const dataCart = state.cart.findIndex(
        (product) => product.id === action.payload.id
      );
      if (dataCart >= 0) {
      } else {
        const sebet = action.payload;

        state.cart.push(sebet);
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    removeCart: (state, action) => {
      const dataCart = state.cart.findIndex(
        (product) => product.id === action.payload.id
      );
      if (dataCart !== -1) {
        state.cart.splice(dataCart, 1);
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    plus: (state, action) => {
      const plus = state.cart.findIndex(
        (product) => product.id === action.payload.id
      );
      if (state.cart[plus].id === action.payload.id) {
        console.log("s");
        state.cart[plus].count += 1;
      }
    },
    minus: (state, action) => {
      const plus = state.cart.findIndex(
        (product) => product.id === action.payload.id
      );
      if (state.cart[plus].count !== 1) {
        state.cart[plus].count -= 1;
      }
    },
    search: (state, action) => {
      const { searchValue } = action.payload;

      const map = state.data.filter((product) =>
        product.name.toLowerCase().includes(searchValue.toLowerCase())
      );

      if (map >= -1) {
      } else {
        if (searchValue !== "") {
          state.axtar = map;
        } else {
          state.axtar.splice(map);
        }
      }
    },
    dataInfo: (state, action) => {
      const innfo = state.info.findIndex(
        (product) => product.id === action.payload.id
      );
      if (innfo >= 0) {
      } else {
        const value = action.payload;
        state.info.splice(value);
        state.info.push(value);
      }
      localStorage.setItem("info", JSON.stringify(state.info));
    },
  },
  
});

export const { addCart, removeCart, plus, minus, search, getDatax, dataInfo } =
  addToCart.actions;
export default addToCart.reducer;