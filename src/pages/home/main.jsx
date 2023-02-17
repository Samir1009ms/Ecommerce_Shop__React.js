import { Product } from "./mainContainer";
import { Search } from "../../components/seacrch/search";
import { itemsApi } from "../../api/data";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getDatax } from "../../store/expense/expense-slice";
export function Main() {
  const [data, setData] = useState();
  const dispatch=useDispatch()
  console.log(data);

  async function getData() {
    try {
      const products = await itemsApi.FetchApi();
      setData(products);
    } catch {
      console.log("error");
    }
  }

  useEffect(() => {
    getData();
  }, []);
  useEffect(()=>{
    dispatch(getDatax(data))

  })

  return (
    <section style={{width: "75%",
      marginLeft: 70,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      rowGap: 42}}>
      <Search />
      {data && (
        <Product
          data={data}
        />
      )}
    </section>
  );
}
