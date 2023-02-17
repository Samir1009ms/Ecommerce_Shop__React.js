import "./global.css";
import { Header } from "./components/header/header";
import { Outlet } from "react-router-dom";
// import { Bag } from "./components/cart/bag";
import { itemsApi } from "./api/data"; 
import { useDispatch } from "react-redux";
import { fetchData } from "./store/expense/expense-slice";
import { useEffect } from "react";


function App() {
  const dispatch =useDispatch()
  async function getData() {
    try {
      const products = await itemsApi.fetchAllApi();
        dispatch(fetchData(products))
        console.log(products);
    } catch {
      console.log("error");
    }
  }

  useEffect(()=>{
    getData()
  },[])

  return (
     <div style={{backgroundColor:"#c6c6c6",display:"flex",paddingTop:20}}>
       <Header />
      <Outlet/>
      {/* <Bag/> */}
     </div>

  );
}

export default App;
