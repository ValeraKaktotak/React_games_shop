import s from './GameBuy.module.css'
import {useDispatch} from "react-redux";
import Button from "../Button/Button";
import {setItemInCart} from "../../redux/Cart-reducer/Cart-reducer";


const GameBuy = ({game}) => {
    const dispatch = useDispatch();
    const cartHandle = (e) => {
        e.stopPropagation();
        dispatch(setItemInCart(game))
    }
    return(
        <div className={s.game_buy}>
            <span>{game.price} руб.</span>
            <Button onClick={ cartHandle } type="primary" >
                В корзину
            </Button>
        </div>
    )
}

export default GameBuy