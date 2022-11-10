import s from './CartBlock.module.css'
import {BiCartAlt} from 'react-icons/bi';
import {useSelector} from "react-redux";
import CartMenu from "../Cart-menu/CartMenu";
import {totalCartCost} from "../utils";
import {useState} from "react";
import ItemsInCart from "../Items-in-cart/ItemsInCart";

const CartBlock = () => {
    const [isCartMenuVisible, setCartMenuVisible] = useState(false)
    const games = useSelector(state => state.cart.itemsInCart);
    const totalCost = totalCartCost(games)
    return (
        <div className={s.cartBlock}>
            <ItemsInCart quantity={games.length} />
            <BiCartAlt size={25} className={s.cartBlock__cart} onClick={()=> setCartMenuVisible(!isCartMenuVisible)}/>
            {totalCost > 0 ? <span className={s.cartBlock__prise}>{totalCost} руб.</span> : null}
            {isCartMenuVisible && <CartMenu items={games}/>}
        </div>
    )
}

export default CartBlock