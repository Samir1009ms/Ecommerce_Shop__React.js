
import style from "./style/style.module.css";
import { BsBagPlusFill } from "react-icons/bs";

import {
  addCart,
  dataInfo,

} from "../../store/expense/expense-slice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


export function Product() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { fullData } = useSelector((product) => product.shop);

  function push(product) {
      dispatch(addCart(product));
  }

  
  return (
    <div className={style.main}>
      {fullData.map((product) => (
        <div key={product.id}>
          <div onClick={() => navigate(`/item/${product.id}`)}>
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
          
      </div>
      ))}
  
    </div>
  );
}
