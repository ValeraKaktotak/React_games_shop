import s from './CartBlock.module.css'
import { BiCartAlt } from 'react-icons/bi';
import {useSelector} from "react-redux";

const CartBlock = () => {
    const games = useSelector(state => state.cart.itemsInCart);
    const totalCartCost = games.reduce((acc, game) => acc += game.price, 0)
    return(
        <div className={s.cartBlock}>
            <BiCartAlt size={25} className={s.cartBlock__cart} />
            <span className={s.cartBlock__prise}>{totalCartCost} руб.</span>
        </div>
    )
}

export default CartBlock