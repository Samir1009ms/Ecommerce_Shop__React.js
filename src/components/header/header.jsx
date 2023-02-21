import { useNavigate } from "react-router-dom"
import logo from "../assests/icon/Logomain.svg"
import style from "./style/style.module.css"
import {IoStorefront,IoBagHandle,IoExit} from "react-icons/io5"
import {RxHamburgerMenu} from "react-icons/rx"

export function Header (){
    const navigate=useNavigate()

    return (
        
        <nav className={style.nav}>
            <ul className={style.navList}>
                <li onClick={()=>navigate("/")} className={style.navListText}><img src={logo} alt="" /></li>
                <li className={style.navListText}><RxHamburgerMenu className={style.navIcon} /></li>
                <li onClick={()=>navigate("/")} className={style.navListText}><IoStorefront className={style.navIcon} /></li>
                <li onClick={()=>navigate("/shop")} className={style.navListText}><IoBagHandle  className={style.navIcon} /></li>
            </ul>
          
                <p className={style.exit}>< IoExit className={style.exitIcon}/></p>
           
        </nav>

        )
}