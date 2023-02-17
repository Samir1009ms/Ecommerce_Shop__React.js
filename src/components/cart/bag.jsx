import style from "./style/style.module.css";
import { useSelector } from "react-redux";
import {IoBagHandle} from "react-icons/io5"

export function Bag() {
  const { cart } = useSelector((product) => product.shop);

  return (
    <div className={style.bag}>
      <h3 className={style.bagName}>Bag</h3>
      <div className={style.bagCont}>
        {cart.map((element, index) => (
          <img
            className={style.bagImg}
            style={{ width: 100, height: 100, objectFit: "cover" }}
            key={index}
            src={element.img[0]}
            alt=""
          />
        ))}
      </div>
      <button className={style.bagButton}>
        <IoBagHandle /> View Bag
      </button>
    </div>
  );
}
