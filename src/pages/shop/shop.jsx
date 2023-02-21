// import { useDispatch, useSelector } from "react-redux";
import s from "./style/style.module.css";
// import { AiFillDelete } from "react-icons/ai";
// import { TbMinus, TbPlus } from "react-icons/tb";
// import { minus, plus, removeCart } from "../../store/expense/expense-slice";
import { Details } from "../../components/details/details";
// import { itemsApi } from "../../api/data";
export function Shop({ i }) {
  // const dispatch = useDispatch();

  // function remo(product) {
  //   dispatch(removeCart(product));
  // }

  // let cart = Object.values(useSelector((product) => product.shop.cart));

  return (
    <section className={s.shop}>
      <div className={s.shopTop}>
        <h3 className={s.shopTopText}>Check your Bag Items</h3>
      </div>
      <Details s={s} />
      {/* <div className={s.shopBottom}>
        {car.map((element, index) => (
          <div className={s.shopContainer} key={index}>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam{" "}
              </p>
              <p className={s.rating}>rating</p>
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
      </div> */}
    </section>
  );
}
