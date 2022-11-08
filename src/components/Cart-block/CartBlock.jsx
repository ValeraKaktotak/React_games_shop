import s from './CartBlock.module.css'
import { BiCartAlt } from 'react-icons/bi';

const CartBlock = () => {
    return(
        <div className={s.cartBlock}>
            <BiCartAlt size={25} className={s.cartBlock__cart} />
            <span className={s.cartBlock__prise}>2578 руб.</span>
        </div>
    )
}

export default CartBlock