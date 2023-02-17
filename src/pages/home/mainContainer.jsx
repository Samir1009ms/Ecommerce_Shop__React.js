// import { useState } from "react";
// import { ProductList } from "../product/productList";
import style from "./style/style.module.css";
import { BsBagPlusFill } from "react-icons/bs";


import { addCart,dataInfo } from "../../store/expense/expense-slice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export function Product({data}) {
const dispatch =useDispatch()


// const {cart} = useSelector((product)=>product.shop);
const navigate = useNavigate();

  return (
    <div className={style.main}>
      {data.map((product) => (
        <div key={product.id}>
          <div onClick={() => navigate("item")} >
            <img  onClick={()=>dispatch(dataInfo(product))} src={product.img[0]} alt={product.name} />
          </div>
          <div>
            <h4 className={style.name}>{product.name}</h4>
            <p className={style.model}>{product.model}</p>
            <p className={style.cont}>
            <span className={style.price}>${product.price}</span>
            <span onClick={()=>dispatch(addCart(product))}><BsBagPlusFill className={style.icon}/></span>
            </p>
          </div> 
          {/* <p onClick={()=>dispatch(removeCart(product))}>sebeet sil</p>
          <p>{product.count}</p>
          <p onClick={()=>dispatch(plus(product))}>artir</p>
          <p onClick={()=>dispatch(minus(product))}>azalt</p> */}
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



