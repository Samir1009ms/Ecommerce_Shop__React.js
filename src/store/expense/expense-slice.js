import { createSlice } from "@reduxjs/toolkit";
import { itemsApi } from "../../api/data";

const addToCart = createSlice({
  name: "shop",
  initialState: {
    cart: localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [],
    axtar: [],
    info: localStorage.getItem("info")
      ? JSON.parse(localStorage.getItem("info"))
      : [],
    fullData: [],
    car: {},
    cem:0
  },

  reducers: {
    addCart: (state, action) => {
      let item = action.payload;
      // console.log(item.count);
      if (state.car[item.id]) {
        state.car[item.id].count++;
      } else {
        state.car[item.id] = item;
        // console.log(item.count);
      }
      itemsApi.createApi(state.car);
    },

    removeCart: (state, action) => {
      let item = action.payload;
      
      if (state.car[item.id]) {
        delete state.car[item.id];
      }
      itemsApi.createApi(state.car);
    },
    cartData: (state, action) => {
      state.car = action.payload;
    },
    fetchData: (state, action) => {
      if (state.fullData.length >= 1) {
      } else {
        state.fullData = action.payload;
      }
    },
    plus: (state, action) => {
      const item = action.payload;

      if (state.car[item.id]) {
        state.car[item.id].count++;
      }
      itemsApi.createApi(state.car);

    },
    minus: (state, action) => {
      const item = action.payload;

      if (state.car[item.id].count>1) {
        state.car[item.id].count--;
      }
      itemsApi.createApi(state.car);
    },
    search: (state, action) => {
      const { searchValue } = action.payload;

      const map = state.fullData.filter((product) =>
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

export const { addCart, removeCart,cartData, plus, minus,fetchData,search ,dataInfo} = addToCart.actions;
export default addToCart.reducer;
