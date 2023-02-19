import { useDispatch, useSelector } from "react-redux";
import { Details } from "../../components/details/details";
import s from "./style/style.module.css";
import { useNavigate } from "react-router-dom";
import { itemsApi } from "../../api/data";
import { useEffect, useState } from "react";
import { cartData } from "../../store/expense/expense-slice";
import {FaCcMastercard} from "react-icons/fa"
import {IoGift} from "react-icons/io5"
import {BiCheckboxSquare} from "react-icons/bi"
import {RxChevronLeft} from "react-icons/rx"

export function Checkout() {
  const dispatch = useDispatch();
  async function basketData() {
    let data = await itemsApi.bagData();
    console.log(data);

    try {
      if (data) {
        dispatch(cartData(data));
      }
    } catch {
      console.log("BAgerror");
    }
  }

const [totals,setTotals]=useState(0)
const [topTotal,settopTotal]=useState(0)
 let total=0
 let shipping=6.99
 let gpt=760.41
 let card =0.00
 let top=0
 let cem


  function TotalPrice() {
    car.map(
      (product) =>
        // console.log(product.count);

        (total += product.price * product.count),
        );
      
    setTotals(parseFloat(total.toFixed(2)));

      top+=(totals+shipping+gpt+card)

      console.log(top.toFixed(2));
      cem =top.toFixed(2)

      settopTotal(cem)
  }

  useEffect(() => {
    TotalPrice();
  });

  useEffect(() => {
    basketData();
  }, []);

  const navigate = useNavigate();

  let car = Object.values(useSelector((product) => product.shop.car));
  console.log(car);
  return (
    <section className={s.shop}>
      <div className={s.shopLeft}>
          {/* //!parcalanma */}
        <div className={s.shopInputCont}>
          <div className={s.melumat}>
            <h2 className={s.adres}>Shipping Address</h2>
            <p className={s.inputText}>John Maker</p>
            <p className={s.inputText}>123 Plae Grond Stret</p>
            <p className={s.inputText}>Vermont, California</p>
            <p className={s.inputText}>United States of America</p>
          </div>
          <div>
            <button className={s.Btn}>Change</button>
          </div>
        </div>
          {/* //!parcalanma */}
        <div className={s.shopInputCont}>
          <div className={s.melumat}>
            <h2 className={s.adres}>Payment Method</h2>
            <p className={s.inputText}> <FaCcMastercard/> Mastercard ending in 1252</p>
            <p className={s.inputText}> <IoGift/> $ 53.21 gift card balance</p>
            <p className={s.inputText}> <BiCheckboxSquare />
              Billing address same as Shipping Address
            </p>
          </div>
          <div>
            <button className={s.Btn}>Change</button>
          </div>
        </div>
        <Details s={s} car={car} />
      </div>
      <div className={s.shopRight}>
        <div className={s.shopCont}>
          <h3 className={s.rightName}>Order Summary</h3>
          {/* //!parcalanma */}

          <p className={s.rightText}>
            <span className={s.rightTxt}>Items:</span>
            <span className={s.rightTxt}>$ {totals} </span>
          </p>
          {/* //!parcalanma */}

          <p className={s.rightText}>
            <span className={s.rightTxt}>Shipping:</span>
            <span className={s.rightTxt}>$ {shipping}</span>
          </p>
          <p className={s.rightText}>
            <span className={s.rightTxt}>Estimated GST:</span>
            <span className={s.rightTxt}>$ {gpt}</span>
          </p>
          <p className={s.rightText}>
            <span className={s.rightTxt}>Gift Card:</span>
            <span className={s.rightTxt}>$ {card}</span>
          </p>
          <p className={s.rightText}>
            <span className={s.rightTxt}>Order Total:</span>
            <span className={s.rightTxt}>$ {topTotal} </span>
          </p>
          <button className={s.rightBtn}>Place your order</button>
        </div>
        <div className={s.rightBottom}>
          <button className={s.rightButton} onClick={() => navigate("/shop")}>
            <RxChevronLeft/> Back
          </button>
        </div>
      </div>
    </section>
  );
}
