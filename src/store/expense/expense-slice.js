import { createSlice } from "@reduxjs/toolkit";
import { itemsApi } from "../../api/data";

const addToCart = createSlice({
  name: "shop",
  initialState: {
    cart: {},
    fullData: [],
    axtar: [],
    info:[],
    cem:0
  },

  reducers: {
    addCart: (state, action) => {
      let item = action.payload;
      // console.log(item.count);
      if (state.cart[item.id]) {
        state.cart[item.id].count++;
      } else {
        state.cart[item.id] = item;
        // console.log(item.count);
      }
      itemsApi.createApi(state.cart);
    },

    removeCart: (state, action) => {
      let item = action.payload;
      
      if (state.cart[item.id]) {
        delete state.cart[item.id];
      }
      itemsApi.createApi(state.cart);
    },
    cartData: (state, action) => {
      state.cart = action.payload;
    },
    fetchData: (state, action) => {
      if (state.fullData.length >= 1) {
      } else {
        state.fullData = action.payload;
      }
    },
    plus: (state, action) => {
      const item = action.payload;

      if (state.cart[item.id]) {
        state.cart[item.id].count++;
      }
      itemsApi.createApi(state.cart);

    },
    minus: (state, action) => {
      const item = action.payload;

      if (state.cart[item.id].count>1) {
        state.cart[item.id].count--;
      }
      itemsApi.createApi(state.cart);
    },
    search: (state, action) => {
      const { searchValue } = action.payload;
      

      const map = state.fullData.filter((product) =>

        product.name.toLowerCase().includes(searchValue.toLowerCase()) 
      );

      // console.log("map",map);
      if (map >= -1) {

        console.log("Uzunluq",map.length);
        state.axtar = [];

      } 
      else {
        if (searchValue === "") {
          
          state.axtar = [];


        } else {
          state.axtar = map;
          console.log("Map Value",JSON.stringify(map,undefined,2));

          
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
