import logo from "../assests/icon/Logomain.svg"
import menu from "../assests/icon/Iconmenu.svg"
import home from "../assests/icon/Nav-Linkhome.svg"
import shop from  "../assests/icon/Vectorshop.svg"
import exit from  "../assests/icon/Nav-Linkquit.svg"
import style from "./style/style.module.css"

export function Header (){


    return (
        
        <nav className={style.nav}>
            <ul className={style.navList}>
                <li className={style.navListText}><img src={logo} alt="" /></li>
                <li className={style.navListText}><img src={menu} alt="" /></li>
                <li className={style.navListText}><img src={home} alt="" /></li>
                <li className={style.navListText}><img src={shop} alt="" /></li>
            </ul>
          
                <p className={style.exit}><img src={exit} alt="" /></p>
           
        </nav>

        )
}