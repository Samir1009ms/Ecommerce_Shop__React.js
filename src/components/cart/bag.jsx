import style from "./style/style.module.css";
import { useSelector } from "react-redux";
import {IoBagHandle} from "react-icons/io5"
import { useNavigate } from "react-router-dom";
import { BAgItem } from "./bagcon";
import { useEffect, useState } from "react";


export function Bag({off}) {

  const navigate=useNavigate()

  let car  = Object.values(useSelector((product) => product.shop.car));

  const [totals,setTotals]=useState(0)
  let total =0

  function TotalPrice (){
  
    car.map((product)=>(
      
      // console.log(product.count);

      total+=(product.price*product.count)
   
    ))

      setTotals(total)
  }

useEffect(()=>{
TotalPrice()
})


  return (
    <div className={style.bag}>
      <h3 className={style.bagName}>Bag</h3>
      <BAgItem car={car} />
      {off && <h4>Total Bag : ${totals} </h4>}
      {off ? <button onClick={()=>navigate("/check")} className={style.bagButton}>
        <IoBagHandle /> Checkout
      </button>:<button onClick={()=>navigate("/shop")} className={style.bagButton}>
        <IoBagHandle /> View Bag
      </button>}
    </div>
  );
}
