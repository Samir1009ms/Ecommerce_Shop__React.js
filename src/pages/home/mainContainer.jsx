// import { useState } from "react";
// import { ProductList } from "../product/productList";
import style from "./style/style.module.css";
import { BsBagPlusFill } from "react-icons/bs";

import {
  addCart,
  cars,
  dataInfo,
  fetchData,
  minus,
  plus,
  rem,
  removeCart,
} from "../../store/expense/expense-slice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { itemsApi } from "../../api/data";
// import { useState } from "react";
// import { useEffect } from "react";

export function Product() {

  // const [dat,setDat]=useState()


  const dispatch = useDispatch();
  // const {cart} = useSelector((product)=>product.shop);
  const navigate = useNavigate();
  const { fullData } = useSelector((product) => product.shop);
  console.log("s", fullData);
  async function push(product) {
    try {
      const products = await itemsApi.createApi(product);
      dispatch(cars(products));
      console.log(products);
      console.log(product.id);
      // setDat(products)

    } catch {
      console.log("error");
    }
  }
  async function remo(product) {
    try {
      const products = await itemsApi.removeApi(product);
      dispatch(rem(products));
      console.log(products);
      // setDat(products)

    } catch {
      console.log("error");
      
    }
  }
 
  

  return (
    <div className={style.main}>
      {fullData.map((product) => (
        <div key={product.id}>
          <div onClick={() => navigate("item")}>
            <img
              onClick={() => dispatch(dataInfo(product))}
              src={product.img[0]}
              alt={product.name}
            />
          </div>
          <div>
            <h4 className={style.name}>{product.name}</h4>
            <p className={style.model}>{product.model}</p>
            <p className={style.cont}>
              <span className={style.price}>${product.price}</span>
              <span onClick={() => push(product)}>
                <BsBagPlusFill className={style.icon} />
              </span>
            </p>
          </div>
          <p onClick={() => remo(product)}>sebeet sil</p>
          {/* <p>{product.count}</p>
          <p onClick={() => dispatch(plus(product))}>artir</p>
          <p onClick={() => dispatch(minus(product))}>azalt</p> */}
        </div>
      ))}
      {/* {
    cart?.map((element,index)=>(
    
     <div key={index}>
       <img src={element.img[0]} alt="" />
       <p>{element.count}</p>
     </div>
    ))

    } */}
    </div>
  );
}
