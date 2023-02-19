import { TbMinus, TbPlus } from "react-icons/tb";
import { AiFillDelete } from "react-icons/ai";

import { minus, plus, removeCart } from "../../store/expense/expense-slice";
import { useDispatch, useSelector } from "react-redux";
import { Rating } from "../rating/rating";


export function Details({s}) {
  let car = Object.values(useSelector((product) => product.shop.car));
  const dispatch = useDispatch();
  function remo(product) {
    dispatch(removeCart(product));
  }

  return (
    <div className={s.shopBottom}>
      {car.map((element, index) => (
        <div style={{border: index===car.length-1 ? "none" :"" }} className={s.shopContainer} key={index}>
          <div className={s.img}>
            <img src={element.img[0]} alt="" />
          </div>
          <div className={s.container}>
            <h4 className={s.name}>
              {element.name}
              <span onClick={() => remo(element)} className={s.delete}>
                <AiFillDelete />
              </span>
            </h4>
            <p className={s.model}>{element.model}</p>
            <p className={s.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam{" "}
            </p>
         
              <Rating s={s} rating={element.rating} />
            
            <p className={s.priceCont}>
              <span className={s.price}>
                ${element.price} x {element.count}
              </span>
              <span className={s.counter}>
                <span
                  onClick={() => dispatch(minus(element))}
                  className={s.minus}
                >
                  <TbMinus />
                </span>
                <span className={s.count}>{element.count}</span>
                <span
                  onClick={() => dispatch(plus(element))}
                  className={s.plus}
                >
                  <TbPlus />
                </span>
              </span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
