import { Product } from "./mainContainer";
import { Search } from "../../components/seacrch/search";
export function Main() {

  return (
    <section style={{width: "75%",
      marginLeft: 70,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      rowGap: 42}}>
      <Search />
      
        <Product />
    
    </section>
  );
}
