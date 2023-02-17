import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { search } from "../../store/expense/expense-slice";
import s from "./style/style.module.css"

export function Search() {
  const [searchValue, setSearchValue] = useState("");
  const { axtar } = useSelector((product) => product.shop);
//   const {data}=useSelector(product=>product.shop)
  const dispatch = useDispatch();

  function handleChange (e) {
    if (e.target.value.trim() === "") {
        setSearchValue("");
    } else {
        setSearchValue(e.target.value);
    }
  };
//   console.log("s",data);

  return (
    <div className={s.search}>
        <p>Search Item</p>
      <input
        onKeyUp={() => dispatch(search({searchValue}))}
        onChange={handleChange}
        value={searchValue}
        type="text"
        name=""
        id=""
        className={s.input}
        placeholder="Apple Watch, Samsung S21, Macbook Pro, ..."
      />
      <div className={s.searchContainer}>
        {axtar.map((product, index) => (
          <div  className={s.cont} key={index}>
            <img className={s.contimg} src={product.img[0]} alt="" />
            <p className={s.Text}>{product.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
