import "./global.css";
import { Header } from "./components/header/header";
import { Outlet } from "react-router-dom";
import { Bag } from "./components/cart/bag";

function App() {
 

  return (
     <div style={{backgroundColor:"#c6c6c6",display:"flex",paddingTop:20}}>
       <Header />
      <Outlet/>
      <Bag/>
     </div>

  );
}

export default App;
