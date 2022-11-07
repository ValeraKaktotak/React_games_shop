import s from './Header.module.css'
import {Link} from "react-router-dom";
import CartBlock from "../Cart-block/CartBlock";

const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.wrapper}>
                <Link to="/" className={s.game_store} >
                    Game store
                </Link>
            </div>
            <div className={s.wrapper +' '+ s.cart_btn_wrapper}>
                <CartBlock />
            </div>
        </div>
    )
}

export default Header