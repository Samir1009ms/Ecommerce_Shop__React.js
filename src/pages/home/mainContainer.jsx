import style from "./style/style.module.css";
import { BsBagPlusFill } from "react-icons/bs";

import {
  addCart,
  dataInfo,
  fetchData,
} from "../../store/expense/expense-slice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { itemsApi } from "../../api/data";

export function Product() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [fullData, setFullData] = useState();
  // const { fullData } = useSelector((product) => product.shop);
  async function getData() {
    try {
      const products = await itemsApi.fetchAllApi();
      // dispatch(fetchData(products));
      setFullData(products);
      console.log(products);
    } catch {
      console.log("error");
    }
  }

  useEffect(() => {
    getData();
  }, []);

  // console.log(fullData[2]);

  function push(product) {
    dispatch(addCart(product));
  }

  return (
    <div className={style.main}>
      {fullData &&
        fullData.map((product) => (
          <div key={product.id}>
            <div onClick={() => navigate(`/item/${product.id}`)}>
              <img
                // onClick={() => dispatch(dataInfo(product))}
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
